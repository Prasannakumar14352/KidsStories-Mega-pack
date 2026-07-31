import { CheckCircle2 } from 'lucide-react';
import { pricingBreakdown, pricingBreakdownSavings, pricingBreakdownTotal, product } from '../config/product';
import type { PricingBreakdownRow } from '../config/product';
import { formatPrice } from '../lib/pricing';
import { useLaunchPricing } from '../hooks/useLaunchPricing';
import { useCountdown } from '../hooks/useCountdown';
import { Checkout } from './Checkout';
import { CountdownTimer } from './CountdownTimer';
import { Container } from './ui/Container';

function BreakdownRow({ label, value }: PricingBreakdownRow) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-t border-border py-3 first:border-t-0">
      <div className="flex items-center gap-2.5">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-orange-light" aria-hidden="true" />
        <span className="text-sm text-text-secondary sm:text-base">{label}</span>
      </div>
      {value.type === 'amount' && (
        <span className="shrink-0 font-display text-sm font-bold text-text-primary sm:text-base">
          {formatPrice(value.amount)}
        </span>
      )}
      {value.type === 'included' && (
        <span className="shrink-0 rounded-full border border-border-bright px-2.5 py-0.5 text-xs font-semibold text-brand-orange-light">
          Included
        </span>
      )}
      {value.type === 'zero-recurring' && (
        <span className="shrink-0 rounded-full border border-border-bright px-2.5 py-0.5 text-xs font-semibold text-brand-orange-light">
          ₹0 recurring
        </span>
      )}
    </div>
  );
}

export function PricingSection() {
  const { price, isLaunchActive } = useLaunchPricing();
  const { isExpired: isOfferExpired } = useCountdown();

  return (
    <section id="pricing" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-lg rounded-3xl border border-border-bright bg-gradient-to-b from-surface-raised to-surface p-7 shadow-orange-glow-lg sm:p-10">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-brand-orange/15 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-brand-orange-light">
              Complete Mega Bundle
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-text-primary sm:text-3xl">
              Get All 50 Stories and Five Bonuses
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-xl text-text-muted line-through">{formatPrice(product.regularPrice)}</span>
              <span className="font-display text-4xl font-bold text-brand-orange-light sm:text-5xl">
                {formatPrice(price)}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-text-secondary">One-time payment</p>
          </div>

          <div className="mt-8">
            {pricingBreakdown.map((row) => (
              <BreakdownRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-black/20 p-5 text-center">
            <p className="text-sm font-medium text-text-secondary">Complete Bundle Value</p>
            <p className="mt-1 font-display text-2xl font-bold text-text-primary sm:text-3xl">
              {formatPrice(pricingBreakdownTotal)}
            </p>
          </div>

          <div className="mt-3 rounded-xl bg-brand-orange/10 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-brand-orange-light">
              Customer Savings Compared with Displayed Value: {formatPrice(pricingBreakdownSavings)}
            </p>
          </div>

          <div className="mt-8">
            <Checkout />
          </div>
          <p className="mt-3 text-center text-xs text-text-muted">
            Digital download • No physical delivery • Secure one-time payment
          </p>

          {isLaunchActive && (
            <div className="mt-4 flex flex-col items-center gap-2 text-center text-xs font-medium text-brand-orange-light">
              {isOfferExpired ? (
                <p>Launch pricing ending soon.</p>
              ) : (
                <>
                  <p>Offer ends in:</p>
                  <CountdownTimer />
                </>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
