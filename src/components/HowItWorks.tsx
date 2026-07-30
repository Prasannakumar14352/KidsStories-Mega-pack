import { Ban, BookOpen, CreditCard, Download, LifeBuoy, ShieldCheck, Zap } from 'lucide-react';
import { Container } from './ui/Container';

const steps = [
  {
    icon: CreditCard,
    title: 'Complete Your Purchase',
    text: 'Select the Buy Now button and complete the secure one-time payment.',
  },
  {
    icon: Download,
    title: 'Receive Your Download',
    text: 'Access the complete Mega Bundle ZIP after successful payment through the existing product-delivery flow.',
  },
  {
    icon: BookOpen,
    title: 'Open, Read and Print',
    text: 'Use the combined PDF for reading, open the editable DOCX for permitted activities and explore all five bonus resources.',
  },
];

const reassurance = [
  { icon: ShieldCheck, label: 'Secure checkout' },
  { icon: Zap, label: 'Instant digital delivery' },
  { icon: Ban, label: 'No recurring charges' },
  { icon: LifeBuoy, label: 'Customer support available' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Start Reading in Three Simple Steps
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="relative rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-brand-orange-light to-brand-orange-dark font-display text-sm font-bold text-white">
                  {index + 1}
                </span>
                <Icon className="h-5 w-5 text-brand-orange-light" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-8">
          {reassurance.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-sm text-text-secondary">
              <Icon className="h-4 w-4 text-brand-orange-light" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
