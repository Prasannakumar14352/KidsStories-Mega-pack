import { GraduationCap, Home, Smile, Users } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { Container } from './ui/Container';

const audiences = [
  {
    icon: Home,
    title: 'Parents',
    text: 'Build a more meaningful bedtime or weekend reading routine.',
  },
  {
    icon: GraduationCap,
    title: 'Teachers',
    text: 'Use short stories to begin classroom discussions and reading activities.',
  },
  {
    icon: BookOpen,
    title: 'Homeschooling Families',
    text: 'Add flexible reading material to home-based learning plans.',
  },
  {
    icon: Users,
    title: 'Tutors and Learning Centres',
    text: 'Use the collection for guided reading and comprehension sessions.',
  },
  {
    icon: Smile,
    title: 'Children Ages 6–12',
    text: 'Explore imaginative stories, positive values and short reading adventures.',
  },
];

export function AudienceSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Created for Homes, Classrooms and Learning Spaces
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-border-bright"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/15">
                <Icon className="h-5 w-5 text-brand-orange-light" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-text-muted">
          Parent-guided reading is recommended for approximately ages 6–10. Confident readers around ages
          9–12 may read independently. Spooky stories should be reviewed by a parent or teacher before use.
        </p>
      </Container>
    </section>
  );
}
