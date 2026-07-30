import { Gift } from 'lucide-react';
import { bonuses, product } from '../config/product';
import { formatPrice } from '../lib/pricing';
import { scrollToPricing } from '../lib/scrollToPricing';
import { trackPurchaseCta } from '../lib/analytics';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export function BonusSection() {
  const handleBonusCta = () => {
    trackPurchaseCta('bonuses');
    scrollToPricing();
  };

  return (
    <section id="bonuses" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Five Exclusive Bonuses to Make Reading More Interactive
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-text-secondary">
            Each bonus is included with the bundle at no additional charge.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-border-bright hover:shadow-orange-glow"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold tracking-wide text-brand-orange-light">
                  {bonus.label}
                </span>
                <Gift className="h-5 w-5 text-brand-orange-light" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">{bonus.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{bonus.description}</p>
              <p className="mt-4 text-sm font-semibold text-text-muted">Value {formatPrice(bonus.value)}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-1 rounded-2xl border border-border-bright bg-gradient-to-b from-surface-raised to-surface p-7 text-center shadow-orange-glow">
          <p className="text-sm font-medium text-text-secondary">Total Bonus Value</p>
          <p className="font-display text-3xl font-bold text-brand-orange-light">
            {formatPrice(product.bonusValue)}
          </p>
          <p className="mt-1 text-sm font-semibold text-text-primary">Included FREE with the Mega Bundle</p>
          <Button variant="primary" size="md" className="mt-5" onClick={handleBonusCta}>
            See Pricing
          </Button>
        </div>
      </Container>
    </section>
  );
}
