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
            Your Download Is Covered
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-sm leading-relaxed text-text-secondary sm:text-base">
            This is a digital product delivered after successful payment. If you experience a duplicate
            charge, corrupted download, missing file or technical delivery problem, contact support and we
            will help restore access or provide an appropriate resolution.
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
            Change-of-mind refunds are normally unavailable after digital access has been supplied, subject
            to applicable consumer law and the published refund policy.
          </p>
        </div>
      </Container>
    </section>
  );
}
