import { product } from '../config/product';
import { formatPrice } from '../lib/pricing';
import { useLaunchPricing } from '../hooks/useLaunchPricing';
import { scrollToPricing } from '../lib/scrollToPricing';
import { trackPurchaseCta } from '../lib/analytics';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { ProductMockup } from './ProductMockup';

export function FinalCTA() {
  const { price } = useLaunchPricing();

  const handleFinalCta = () => {
    trackPurchaseCta('final_cta');
    scrollToPricing();
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/15 blur-[140px]"
        aria-hidden="true"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-full border border-border-bright bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-orange-light">
            Make Reading Time More Meaningful
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
            Bring Home 50 Stories of Imagination, Courage and Positive Values
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-text-secondary lg:mx-0">
            Download the complete story collection, editable master file and all five reading bonuses in one
            organised Mega Bundle.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="font-display text-2xl font-bold text-brand-orange-light sm:text-3xl">
              Launch Price {formatPrice(price)}
            </span>
            <span className="text-base text-text-muted line-through">
              Regular Price {formatPrice(product.regularPrice)}
            </span>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button variant="primary" size="lg" onClick={handleFinalCta}>
              Get the Complete Mega Bundle
            </Button>
          </div>
          <p className="mt-4 text-sm text-text-muted">One-time payment. Instant digital access. No subscription.</p>
        </div>

        <div className="order-first lg:order-last">
          <ProductMockup />
        </div>
      </Container>
    </section>
  );
}
