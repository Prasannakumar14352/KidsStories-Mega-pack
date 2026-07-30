import { bonuses, product, totalSavings, totalValue } from '../config/product';
import { formatPrice } from '../lib/pricing';
import { useLaunchPricing } from '../hooks/useLaunchPricing';
import { scrollToPricing } from '../lib/scrollToPricing';
import { trackPurchaseCta } from '../lib/analytics';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export function ValueStack() {
  const { price } = useLaunchPricing();
  const savings = totalValue - price;

  const handleValueStackCta = () => {
    trackPurchaseCta('value_stack');
    scrollToPricing();
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Everything You Receive for One Launch Price
        </h2>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="text-sm font-medium text-text-primary sm:text-base">
              50 Illustrated Kids Stories Mega Bundle
            </p>
            <p className="shrink-0 text-sm font-semibold text-text-secondary sm:text-base">
              {formatPrice(product.mainValue)}
            </p>
          </div>
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="flex items-center justify-between gap-4 border-t border-border py-3">
              <p className="text-sm text-text-secondary sm:text-base">{bonus.title}</p>
              <p className="shrink-0 text-sm font-semibold text-text-secondary sm:text-base">
                {formatPrice(bonus.value)}
              </p>
            </div>
          ))}

          <div className="mt-2 border-t-2 border-dashed border-border pt-4">
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-base font-bold text-text-primary sm:text-lg">Total Value</p>
              <p className="font-display text-base font-bold text-text-primary sm:text-lg">
                {formatPrice(totalValue)}
              </p>
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <p className="text-sm text-text-secondary">Regular Price</p>
              <p className="text-sm text-text-secondary line-through">{formatPrice(product.regularPrice)}</p>
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-text-primary">Launch Price</p>
              <p className="font-display text-xl font-bold text-brand-orange-light">{formatPrice(price)}</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-brand-orange/10 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-brand-orange-light">
              You save {formatPrice(price === product.launchPrice ? totalSavings : savings)} compared with the
              total displayed value
            </p>
          </div>

          <Button variant="primary" size="lg" className="mt-6 w-full" onClick={handleValueStackCta}>
            Get This Deal for {formatPrice(price)}
          </Button>
        </div>
      </Container>
    </section>
  );
}
