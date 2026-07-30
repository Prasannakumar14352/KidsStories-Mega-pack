import { useCallback, useEffect, useRef, useState } from 'react';
import { DEFAULT_REGION, regionPricing } from '../config/region';
import type { Currency, Gateway, Region } from '../config/region';
import { useLaunchPricing } from './useLaunchPricing';

const GEO_API_URL = 'https://ipapi.co/json/';
const GEO_TIMEOUT_MS = 3000;

interface GeoResponse {
  country_code?: string;
}

interface DetectionResult {
  region: Region;
  countryCode: string | null;
}

async function detectRegion(signal: AbortSignal): Promise<DetectionResult> {
  const response = await fetch(GEO_API_URL, { signal });
  if (!response.ok) throw new Error(`Geolocation lookup failed with status ${response.status}`);
  const data = (await response.json()) as GeoResponse;
  const countryCode = data.country_code ?? null;
  return { region: countryCode === 'IN' ? 'IN' : 'INTL', countryCode };
}

/**
 * Dev-only region override for testing without spoofing a real IP:
 * ?testRegion=IN or ?testRegion=US. Never active in a production build.
 */
function getTestRegionOverride(): Region | null {
  if (!import.meta.env.DEV) return null;
  const param = new URLSearchParams(window.location.search).get('testRegion');
  if (param === 'IN') return 'IN';
  if (param === 'US') return 'INTL';
  return null;
}

export interface PricingState {
  region: Region;
  country: string | null;
  currency: Currency;
  amount: number;
  gateway: Gateway;
  loading: boolean;
  error: string | null;
  isManualOverride: boolean;
  setRegion: (region: Region | null) => void;
}

/**
 * Resolves region-based pricing client-side. The visitor always sees the
 * default (INTL/PayPal/USD) immediately - if an India IP is confirmed within
 * a few seconds it upgrades in place to INR/Razorpay. Detection never uses
 * browser locale or timezone, only the IP geolocation lookup, and always
 * falls back to the default on any failure, timeout, or slow response.
 */
export function usePricing(): PricingState {
  const { isLaunchActive } = useLaunchPricing();
  const testOverride = getTestRegionOverride();
  const [detectedRegion, setDetectedRegion] = useState<Region>(testOverride ?? DEFAULT_REGION);
  const [manualRegion, setManualRegion] = useState<Region | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(!testOverride);
  const [error, setError] = useState<string | null>(null);
  const hasManualOverrideRef = useRef(false);

  useEffect(() => {
    if (testOverride) {
      console.log('[usePricing] dev testRegion override active:', testOverride, '(?testRegion=IN|US)');
      setCountry(testOverride === 'IN' ? 'IN' : 'US');
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), GEO_TIMEOUT_MS);

    detectRegion(controller.signal)
      .then(({ region, countryCode }) => {
        console.log('[usePricing] detected country:', countryCode);
        setDetectedRegion(region);
        setCountry(countryCode);
      })
      .catch(() => {
        // Lookup failed or timed out - keep the default region already set.
        setError('Could not detect your region. Showing the international payment option.');
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
        setLoading(false);
      });

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const setRegion = useCallback((region: Region | null) => {
    hasManualOverrideRef.current = region !== null;
    setManualRegion(region);
  }, []);

  const region = manualRegion ?? detectedRegion;
  const pricing = regionPricing[region];
  const amount = isLaunchActive ? pricing.launchAmount : pricing.regularAmount;

  return {
    region,
    country,
    currency: pricing.currency,
    amount,
    gateway: pricing.gateway,
    loading,
    error,
    isManualOverride: hasManualOverrideRef.current,
    setRegion,
  };
}
