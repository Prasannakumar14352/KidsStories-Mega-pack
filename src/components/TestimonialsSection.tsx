import { Star } from 'lucide-react';
import { Container } from './ui/Container';

/**
 * Editable placeholders - replace with real testimonials when available.
 */
const testimonials = [
  {
    quote: 'My 7-year-old now asks for a story every night.',
    name: 'Priya',
    role: 'Parent',
  },
  {
    quote: 'Perfect for my classroom — the editable file saved me hours.',
    name: 'Anjali',
    role: 'Teacher',
  },
  {
    quote: 'Great range of stories for different reading levels.',
    name: 'Rahul',
    role: 'Parent',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-orange-light text-brand-orange-light" aria-hidden="true" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Loved by Parents and Teachers
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-border-bright"
            >
              <StarRow />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary sm:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 font-display text-sm font-semibold text-text-primary">
                {testimonial.name}, <span className="font-normal text-text-muted">{testimonial.role}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-text-muted">
          Built by a parent who wanted screen-free reading that kids actually enjoy.
        </p>
      </Container>
    </section>
  );
}
