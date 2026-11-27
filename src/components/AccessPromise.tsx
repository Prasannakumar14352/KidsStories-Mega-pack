import { FileCog, LifeBuoy, ReceiptText } from 'lucide-react';
import { Container } from './ui/Container';

const points = [
  { icon: LifeBuoy, label: 'File-delivery support' },
  { icon: FileCog, label: 'Corrupted-file replacement' },
  { icon: ReceiptText, label: 'Duplicate-payment assistance' },
];

export function AccessPromise() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-7 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
            7-Day Money-Back Guarantee
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-sm leading-relaxed text-text-secondary sm:text-base">
            If the bundle isn&apos;t right for your family or classroom, email us within 7 days of purchase
            for a full refund. And if you ever have a duplicate charge, corrupted download, missing file or
            other delivery problem, contact support and we will put it right.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {points.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                <Icon className="h-4 w-4 text-brand-orange-light" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-prose text-xs leading-relaxed text-text-muted">
            Refunds are returned to your original payment method. See the refund policy for the full
            terms.
          </p>
        </div>
      </Container>
    </section>
  );
}
