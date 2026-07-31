import { Clock } from 'lucide-react';
import { EXPIRE_BEHAVIOR } from '../config/countdown';
import { useCountdown } from '../hooks/useCountdown';

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

interface CountdownTimerProps {
  className?: string;
}

/**
 * Reusable launch-offer countdown pill. Reads the shared, persistent
 * per-visitor timer from useCountdown() - every instance of this component
 * on the page stays in sync since they all read the same localStorage-backed
 * end timestamp.
 */
export function CountdownTimer({ className = '' }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown();

  if (isExpired && EXPIRE_BEHAVIOR === 'hide') return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium tabular-nums ${className}`}
    >
      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
      <span aria-live="off">
        {days > 0 && `${days}d `}
        {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
      </span>
    </span>
  );
}
