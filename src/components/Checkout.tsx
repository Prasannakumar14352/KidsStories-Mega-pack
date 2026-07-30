import { DODO_PAYMENT_LINK } from '../config/dodo';
import { trackBeginCheckout, trackPurchaseCta } from '../lib/analytics';
import { Button } from './ui/Button';

// --- DISABLED: Region-based gateway selection (Razorpay + PayPal) — kept for reference ---
// Replaced by a single Dodo Payments hosted checkout link shown to every
// visitor regardless of region (see src/config/dodo.ts). To restore,
// re-enable src/hooks/usePricing.ts, src/config/region.ts,
// src/hooks/useRazorpayCheckout.ts and src/components/PayPalCheckoutButton.tsx,
// then swap this file's body back to the version below.
//
// import { product } from '../config/product';
// import { usePricing } from '../hooks/usePricing';
// import { useRazorpayCheckout } from '../hooks/useRazorpayCheckout';
// import { formatPrice, formatUSD } from '../lib/pricing';
// import { PayPalCheckoutButton } from './PayPalCheckoutButton';
//
// const regionOptions = [
//   { region: 'IN' as const, label: '🇮🇳 India (₹ INR)' },
//   { region: 'INTL' as const, label: '🌍 International ($ USD)' },
// ];
//
// export function Checkout() {
//   const { region, currency, amount, gateway, razorpayUrl, loading, error, setRegion } = usePricing();
//   const { handlePayment, isRedirecting } = useRazorpayCheckout(razorpayUrl);
//
//   const formattedAmount = currency === 'INR' ? formatPrice(amount) : formatUSD(amount);
//
//   return (
//     <div>
//       <div className="flex justify-center gap-2" role="group" aria-label="Choose your region">
//         {regionOptions.map((option) => (
//           <button
//             key={option.region}
//             type="button"
//             onClick={() => setRegion(option.region)}
//             aria-pressed={region === option.region}
//             className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
//               region === option.region
//                 ? 'border-border-bright bg-brand-orange/15 text-brand-orange-light'
//                 : 'border-border text-text-muted hover:text-text-secondary'
//             }`}
//           >
//             {option.label}
//           </button>
//         ))}
//       </div>
//
//       {gateway === 'razorpay' ? (
//         <>
//           <Button
//             variant="primary"
//             size="lg"
//             className="mt-5 w-full"
//             onClick={handlePayment}
//             disabled={isRedirecting || !razorpayUrl}
//             aria-busy={isRedirecting}
//           >
//             {isRedirecting ? 'Opening Secure Payment…' : `Get Instant Access for ${formattedAmount}`}
//           </Button>
//           {!razorpayUrl && (
//             <p className="mt-3 text-center text-xs text-text-muted" role="status">
//               Payment temporarily unavailable. Please try again shortly or contact{' '}
//               <a href={`mailto:${product.supportEmail}`} className="text-brand-orange-light">
//                 support
//               </a>
//               .
//             </p>
//           )}
//         </>
//       ) : (
//         <div className="mt-5">
//           <p className="mb-3 text-center font-display text-lg font-bold text-brand-orange-light">
//             {formattedAmount}
//           </p>
//           <PayPalCheckoutButton amount={amount} />
//         </div>
//       )}
//
//       {gateway === 'paypal' && (
//         <p className="mt-3 text-center text-xs text-text-muted">
//           Prices shown above are in INR. International customers are charged the USD equivalent via PayPal.
//         </p>
//       )}
//
//       {error && !loading && (
//         <p className="mt-3 text-center text-xs text-text-muted" role="status">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }
// --- END DISABLED: Region-based gateway selection ---

/**
 * Dodo Payments checkout: Dodo is a Merchant of Record that auto-detects the
 * visitor's location, currency and local payment methods on its own hosted
 * page, so this app no longer picks a gateway per region - one link, shown
 * to every visitor.
 */
export function Checkout() {
  const handleClick = () => {
    trackPurchaseCta('pricing');
    trackBeginCheckout('pricing');
  };

  return (
    <div>
      <a href={DODO_PAYMENT_LINK} onClick={handleClick} className="block">
        <Button variant="primary" size="lg" className="w-full">
          Buy Now — Instant Download
        </Button>
      </a>
      <p className="mt-3 text-center text-xs text-text-muted">
        Secure checkout powered by Dodo Payments. Your local price and payment methods are shown at checkout.
      </p>
    </div>
  );
}
