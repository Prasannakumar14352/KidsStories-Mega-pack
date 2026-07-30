import { stats } from '../config/product';
import { Container } from './ui/Container';

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-background-secondary py-10 sm:py-12" aria-label="Bundle statistics">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
                <span className="text-brand-orange-light">{stat.value}</span>
              </p>
              <p className="mt-1.5 text-xs font-medium text-text-secondary sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
