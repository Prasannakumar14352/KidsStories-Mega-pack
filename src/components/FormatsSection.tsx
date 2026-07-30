import { CheckCircle2 } from 'lucide-react';
import { Container } from './ui/Container';

const formats = [
  {
    badge: 'PDF',
    title: 'Combined Ready-to-Read Storybook',
    text: 'Open the complete collection on a phone, tablet or computer, or print selected pages for permitted home and classroom use.',
    features: [
      'All 50 stories in one organised file',
      'Easy digital reading',
      'Print-friendly layout',
      'No special software required',
      'Works with common PDF readers',
    ],
  },
  {
    badge: 'DOCX',
    title: 'Editable Master Document',
    text: 'Use the editable document to add permitted classroom notes, learning prompts and activity instructions for your own household or classroom.',
    features: [
      'All stories in one editable file',
      'Compatible with Microsoft Word',
      'Can be opened in compatible document editors',
      'Useful for lesson preparation',
      'Subject to the included licence',
    ],
  },
];

export function FormatsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Ready to Read. Easy to Adapt.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {formats.map((format) => (
            <div
              key={format.badge}
              className="rounded-2xl border border-border bg-surface p-7 transition-all duration-200 hover:border-border-bright sm:p-8"
            >
              <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1 font-display text-xs font-bold tracking-wide text-brand-orange-light">
                {format.badge}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-text-primary sm:text-2xl">
                {format.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{format.text}</p>
              <ul className="mt-5 space-y-2.5">
                {format.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange-light" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-text-muted">
          Editable does not mean resale rights. Buyers may not resell, redistribute, upload or commercially
          republish the files.
        </p>
      </Container>
    </section>
  );
}
