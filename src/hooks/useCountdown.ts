import { useEffect, useState } from 'react';
import { OFFER_DURATION_HOURS } from '../config/countdown';

export interface CountdownState {
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isExpired: boolean;
}

const DURATION_MS = OFFER_DURATION_HOURS * 60 * 60 * 1000;

function computeState(endMs: number, nowMs: number): CountdownState {
  const totalMs = Math.max(0, endMs - nowMs);
  const totalSeconds = Math.floor(totalMs / 1000);
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    totalMs,
    isExpired: totalMs <= 0,
  };
}

/**
 * Display-only launch-offer countdown. Starts fresh at OFFER_DURATION_HOURS
 * on every page load/refresh - nothing is persisted anywhere. Ticks every
 * second from Date.now() (not a decrementing counter, so it can't drift) and
 * freezes at zero instead of going negative or looping.
 */
export function useCountdown(): CountdownState {
  const [endMs] = useState(() => Date.now() + DURATION_MS);
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return computeState(endMs, nowMs);
}
