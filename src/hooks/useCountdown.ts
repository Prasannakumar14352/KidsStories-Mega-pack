import { useEffect, useState } from 'react';
import { OFFER_DURATION_HOURS, OFFER_END_STORAGE_KEY } from '../config/countdown';

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isExpired: boolean;
}

const DURATION_MS = OFFER_DURATION_HOURS * 60 * 60 * 1000;

function readOrCreateEndMs(): number {
  try {
    const stored = window.localStorage.getItem(OFFER_END_STORAGE_KEY);
    if (stored) {
      const parsed = Number(stored);
      // Guards against a corrupted or nonsensical stored value - a valid,
      // already-past timestamp is NOT corruption and is deliberately kept
      // as-is (the offer stays expired for that visitor, it doesn't reset).
      if (Number.isFinite(parsed) && parsed > 0) {
        return parsed;
      }
    }
  } catch {
    // localStorage unavailable (private mode, disabled, etc.) - fall through
    // to an in-memory-only timer for this page load.
  }

  const endMs = Date.now() + DURATION_MS;
  try {
    window.localStorage.setItem(OFFER_END_STORAGE_KEY, String(endMs));
  } catch {
    // Ignore - the timer still works for this page load, it just won't
    // persist across a refresh if storage isn't available.
  }
  return endMs;
}

function computeState(endMs: number, nowMs: number): CountdownState {
  const totalMs = Math.max(0, endMs - nowMs);
  const totalSeconds = Math.floor(totalMs / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    totalMs,
    isExpired: totalMs <= 0,
  };
}

/**
 * Persistent per-visitor countdown for the launch-offer timer. The end
 * timestamp is created once per browser and stored in localStorage - a
 * refresh reads it back and computes remaining time from it, it is never
 * reset or re-created. Ticks are timestamp-based (Date.now() each second,
 * not a decrementing counter), so a throttled/backgrounded tab can't cause
 * drift, and visibilitychange/focus force an immediate recompute the moment
 * the visitor returns to the tab rather than waiting for the next tick.
 */
export function useCountdown(): CountdownState {
  const [endMs] = useState(readOrCreateEndMs);
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const tick = () => setNowMs(Date.now());
    const id = window.setInterval(tick, 1000);

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') tick();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('focus', tick);

    return () => {
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('focus', tick);
    };
  }, []);

  return computeState(endMs, nowMs);
}
