import { product } from '../config/product';
import { usePricing } from '../hooks/usePricing';
import { useHostedCheckout } from '../hooks/useHostedCheckout';
import { formatPrice, formatUSD } from '../lib/pricing';
import { PayPalCheckoutButton } from './PayPalCheckoutButton';
import { Button } from './ui/Button';

const regionOptions = [
  { region: 'IN' as const, label: '🇮🇳 India (₹ INR)' },
  // { region: 'INTL' as const, label: '🌍 International ($ USD)' },
];

// --- DISABLED: Dodo Payments (kept for reference) ---
// Single hosted checkout link shown to every visitor regardless of region -
// see src/config/dodo.ts. Reverted back to the Razorpay + PayPal region
// split below. To restore Dodo, swap this file's body back to the version
// below and re-disable src/hooks/usePricing.ts, src/config/region.ts,
// src/hooks/useHostedCheckout.ts and src/components/PayPalCheckoutButton.tsx.
//
// import { DODO_PAYMENT_LINK } from '../config/dodo';
// import { trackBeginCheckout, trackPurchaseCta } from '../lib/analytics';
//
// export function Checkout() {
//   const handleClick = () => {
//     trackPurchaseCta('pricing');
//     trackBeginCheckout('pricing');
//   };
//
//   return (
//     <div>
//       <a href={DODO_PAYMENT_LINK} onClick={handleClick} className="block">
//         <Button variant="primary" size="lg" className="w-full">
//           Buy Now — Instant Download
//         </Button>
//       </a>
//       <p className="mt-3 text-center text-xs text-text-muted">
//         Secure checkout powered by Dodo Payments. Your local price and payment methods are shown at checkout.
//       </p>
//     </div>
//   );
// }
// --- END DISABLED: Dodo Payments ---

/**
 * Region-aware checkout: shows the hosted-checkout button for India (INR,
 * currently SuperProfile - see src/config/region.ts) and the PayPal button
 * for everyone else (USD), based on an IP geolocation lookup with a manual
 * toggle as a fallback for when detection gets it wrong.
 */
export function Checkout() {
  const { region, currency, amount, gateway, hostedCheckoutUrl, loading, error, setRegion } = usePricing();
  const { handlePayment, isRedirecting } = useHostedCheckout(hostedCheckoutUrl);

  const formattedAmount = currency === 'INR' ? formatPrice(amount) : formatUSD(amount);

  return (
    <div>
      <div className="flex justify-center gap-2" role="group" aria-label="Choose your region">
        {regionOptions.map((option) => (
          <button
            key={option.region}
            type="button"
            onClick={() => setRegion(option.region)}
            aria-pressed={region === option.region}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              region === option.region
                ? 'border-border-bright bg-brand-orange/15 text-brand-orange-light'
                : 'border-border text-text-muted hover:text-text-secondary'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {gateway !== 'paypal' ? (
        <>
          <Button
            variant="primary"
            size="lg"
            className="mt-5 w-full"
            onClick={handlePayment}
            disabled={isRedirecting || !hostedCheckoutUrl}
            aria-busy={isRedirecting}
          >
            {isRedirecting ? 'Opening Secure Payment…' : `Get Instant Access for ${formattedAmount}`}
          </Button>
          {!hostedCheckoutUrl && (
            <p className="mt-3 text-center text-xs text-text-muted" role="status">
              Payment temporarily unavailable. Please try again shortly or contact{' '}
              <a href={`mailto:${product.supportEmail}`} className="text-brand-orange-light">
                support
              </a>
              .
            </p>
          )}
        </>
      ) : (
        <div className="mt-5">
          <p className="mb-3 text-center font-display text-lg font-bold text-brand-orange-light">
            {formattedAmount}
          </p>
          <PayPalCheckoutButton amount={amount} />
        </div>
      )}

      {gateway === 'paypal' && (
        <p className="mt-3 text-center text-xs text-text-muted">
          Prices shown above are in INR. International customers are charged the USD equivalent via PayPal.
        </p>
      )}

      {error && !loading && (
        <p className="mt-3 text-center text-xs text-text-muted" role="status">
          {error}
        </p>
      )}
    </div>
  );
}
