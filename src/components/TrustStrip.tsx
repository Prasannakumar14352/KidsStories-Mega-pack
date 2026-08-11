import { CheckCircle2 } from 'lucide-react';

const items = ['Instant download', 'PDF + editable DOCX', 'Works on any device', 'One-time payment'];

interface TrustStripProps {
  className?: string;
}

/**
 * Compact reusable trust row rendered directly below every primary CTA
 * button on the page (hero, main pricing box, final CTA).
 */
export function TrustStrip({ className = 'justify-center' }: TrustStripProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-1.5 text-xs font-medium text-text-secondary sm:text-sm">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange-light" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
