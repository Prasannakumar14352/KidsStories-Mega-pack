import { categories } from '../config/product';
import { categoryIconMap } from '../lib/categoryIcons';
import { trackSelectItem } from '../lib/analytics';
import { Container } from './ui/Container';

export function CategoryGrid() {
  return (
    <section id="categories" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            50 Stories Across 10 Engaging Categories
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-text-secondary">
            Choose a story to suit the child&rsquo;s interests, the lesson you want to discuss or the mood of
            the reading session.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = categoryIconMap[category.icon];
            return (
              <button
                key={category.name}
                type="button"
                onClick={() => trackSelectItem(category.name)}
                className="group flex flex-col items-start rounded-2xl border border-border bg-surface p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-border-bright hover:shadow-orange-glow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/15 transition-colors group-hover:bg-brand-orange/25">
                  <Icon className="h-5 w-5 text-brand-orange-light" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-text-primary">{category.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{category.description}</p>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
