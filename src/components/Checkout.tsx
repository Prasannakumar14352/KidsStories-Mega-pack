import { usePricing } from '../hooks/usePricing';
import { useRazorpayCheckout } from '../hooks/useRazorpayCheckout';
import { formatPrice, formatUSD } from '../lib/pricing';
import { PayPalCheckoutButton } from './PayPalCheckoutButton';
import { Button } from './ui/Button';

const regionOptions = [
  { region: 'IN' as const, label: '🇮🇳 India (₹ INR)' },
  { region: 'INTL' as const, label: '🌍 International ($ USD)' },
];

/**
 * Region-aware checkout: shows the Razorpay button for India (INR) and the
 * PayPal button for everyone else (USD), based on an IP geolocation lookup
 * with a manual toggle as a fallback for when detection gets it wrong.
 */
export function Checkout() {
  const { region, currency, amount, gateway, loading, error, setRegion } = usePricing();
  const { handlePayment, isRedirecting } = useRazorpayCheckout();

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

      {gateway === 'razorpay' ? (
        <Button
          variant="primary"
          size="lg"
          className="mt-5 w-full"
          onClick={handlePayment}
          disabled={isRedirecting}
          aria-busy={isRedirecting}
        >
          {isRedirecting ? 'Opening Secure Payment…' : `Get Instant Access for ${formattedAmount}`}
        </Button>
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
