import { BookOpenCheck, FileEdit, HeartHandshake, PartyPopper } from 'lucide-react';
import { Container } from './ui/Container';

const benefits = [
  {
    icon: BookOpenCheck,
    title: 'Encourage Regular Reading',
    text: 'Short, approachable stories make it easier to include reading in bedtime routines, classroom sessions and quiet-time activities.',
  },
  {
    icon: HeartHandshake,
    title: 'Teach Positive Values',
    text: 'Explore themes such as honesty, courage, friendship, responsibility, kindness and good behaviour through memorable stories.',
  },
  {
    icon: FileEdit,
    title: 'Read or Customise',
    text: 'Use the combined PDF for immediate reading or adapt the editable DOCX for permitted personal and classroom activities.',
  },
  {
    icon: PartyPopper,
    title: 'Keep Children Engaged',
    text: 'Use discussion questions, creative activities, bookmarks, trackers and rewards to turn each story into an interactive experience.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            More Than Just Another Folder of Kids&rsquo; Files
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-text-secondary">
            Finding meaningful reading material can take time. This bundle brings a complete story collection,
            editable source material and practical reading activities together in one organised download.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-border-bright hover:shadow-orange-glow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/15">
                <Icon className="h-5 w-5 text-brand-orange-light" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
