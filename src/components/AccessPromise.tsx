import { FileCog, LifeBuoy, ReceiptText, ShieldCheck } from 'lucide-react';
import { Container } from './ui/Container';

const points = [
  { icon: ShieldCheck, label: '7-day money-back guarantee' },
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
            Try It Risk-Free for 7 Days
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-sm leading-relaxed text-text-secondary sm:text-base">
            Download the stories and read a few with your child. If you&rsquo;re not happy, email support within
            7 days of purchase and we&rsquo;ll refund you in full. Duplicate charges, corrupted downloads or
            missing files are always fixed for you, too.
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
            Covered by our 7-day money-back guarantee. See the refund policy for details.
          </p>
        </div>
      </Container>
    </section>
  );
}
