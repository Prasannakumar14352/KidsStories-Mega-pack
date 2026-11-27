import { ShieldCheck } from 'lucide-react';

interface GuaranteeBadgeProps {
  className?: string;
}

/**
 * Compact guarantee badge placed directly adjacent to each buy button, in
 * addition to the full guarantee section (see AccessPromise.tsx).
 */
export function GuaranteeBadge({ className = 'justify-center' }: GuaranteeBadgeProps) {
  return (
    <p className={`flex items-center gap-1.5 text-xs font-medium text-text-muted ${className}`}>
      <ShieldCheck className="h-4 w-4 shrink-0 text-brand-orange-light" aria-hidden="true" />
      7-day money-back guarantee
    </p>
  );
}
