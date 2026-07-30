import { Ban, CreditCard, Users, Zap } from 'lucide-react';
import { product } from '../config/product';
import { formatPrice } from '../lib/pricing';
import { useLaunchPricing } from '../hooks/useLaunchPricing';
import { useAnchorNav } from '../hooks/useAnchorNav';
import { scrollToPricing } from '../lib/scrollToPricing';
import { trackPurchaseCta } from '../lib/analytics';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { ProductMockup } from './ProductMockup';

const trustItems = [
  { icon: Zap, label: 'Instant Digital Access' },
  { icon: CreditCard, label: 'One-Time Payment' },
  { icon: Ban, label: 'No Subscription' },
  { icon: Users, label: 'Personal & Classroom Use' },
];

export function HeroSection() {
  const { price } = useLaunchPricing();
  const goToAnchor = useAnchorNav();

  const handleHeroCta = () => {
    trackPurchaseCta('hero');
    scrollToPricing();
  };

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
      <div
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-brand-orange/10 blur-[120px]"
        aria-hidden="true"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-xl animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-border-bright bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-orange-light">
            50 Illustrated Stories • PDF + Editable DOCX
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-text-primary sm:text-5xl lg:text-[3.25rem]">
            Turn Story Time Into an{' '}
            <span className="bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              Adventure
            </span>{' '}
            Children Look Forward To
          </h1>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-text-secondary sm:text-lg">
            Give children a complete collection of engaging stories about courage, kindness, friendship,
            imagination and positive behaviour. Receive all{' '}
            <span className="font-semibold text-text-primary">50 Illustrated Kids Stories</span> in a
            ready-to-read PDF, an editable master DOCX and a complete set of reading bonuses.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg" onClick={handleHeroCta}>
              Get the Complete Bundle for {formatPrice(price)}
            </Button>
            <Button variant="secondary" size="lg" onClick={() => goToAnchor('#included')}>
              See What&rsquo;s Included
            </Button>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-text-secondary">
                <Icon className="h-4 w-4 shrink-0 text-brand-orange-light" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-text-muted">
            Regular price {formatPrice(product.regularPrice)}. No physical product will be shipped.
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <ProductMockup />
        </div>
      </Container>
    </section>
  );
}
