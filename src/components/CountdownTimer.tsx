import { Clock } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

interface CountdownTimerProps {
  className?: string;
}

/**
 * Reusable launch-offer countdown pill, displayed as HH:MM:SS. Starts fresh
 * on every page load (see useCountdown()) and freezes at 00:00:00 if left
 * open past the offer duration - it never disables price or checkout.
 */
export function CountdownTimer({ className = '' }: CountdownTimerProps) {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium tabular-nums ${className}`}
    >
      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
      <span aria-live="off">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>
    </span>
  );
}
