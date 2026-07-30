import { useEffect, useState } from 'react';
import { product } from '../config/product';

export interface RemainingTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(targetMs: number, nowMs: number): RemainingTime {
  const diffSeconds = Math.max(0, Math.floor((targetMs - nowMs) / 1000));
  return {
    days: Math.floor(diffSeconds / 86400),
    hours: Math.floor((diffSeconds % 86400) / 3600),
    minutes: Math.floor((diffSeconds % 3600) / 60),
    seconds: diffSeconds % 60,
  };
}

/**
 * Single source of truth for launch-pricing state. Every section that shows
 * a price or a countdown reads from this hook so the launch-price -> regular-
 * price switch (when a real launchEndDate passes) happens everywhere at once,
 * for every visitor, from the same fixed timestamp - never restarted per
 * session.
 */
export function useLaunchPricing() {
  const targetMs = product.launchEndDate ? new Date(product.launchEndDate).getTime() : null;
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    if (targetMs === null) return;
    const id = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const hasDeadline = targetMs !== null;
  const isExpired = hasDeadline && nowMs >= (targetMs as number);
  const isLaunchActive = !hasDeadline || !isExpired;
  const price = isLaunchActive ? product.launchPrice : product.regularPrice;
  const remaining = hasDeadline && !isExpired ? getRemaining(targetMs as number, nowMs) : null;

  return { price, isLaunchActive, hasDeadline, isExpired, remaining };
}
