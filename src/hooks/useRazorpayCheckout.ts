import { useCallback, useRef, useState } from 'react';
import { trackBeginCheckout, trackPurchaseCta } from '../lib/analytics';

const REDIRECT_FAILSAFE_MS = 4000;

/**
 * The only path in the app that opens Razorpay. Every other CTA scrolls to
 * the pricing card via scrollToPricing() instead - this hook is wired to
 * that card's button alone, and sends the customer straight to the
 * configured Razorpay Payment Page with no intermediate form or page.
 *
 * paymentUrl is resolved once, centrally, by usePricing() (from
 * VITE_RAZORPAY_PAYMENT_PAGE_URL via src/config/region.ts) - this hook does
 * not look it up itself, so there is exactly one place that can disagree
 * about which URL to use.
 */
export function useRazorpayCheckout(paymentUrl: string | null) {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const failsafeRef = useRef<number>();

  const handlePayment = useCallback(() => {
    if (isRedirecting) return;

    if (!paymentUrl) {
      console.error('Razorpay payment URL is not configured. Set VITE_RAZORPAY_PAYMENT_PAGE_URL.');
      return;
    }

    setIsRedirecting(true);
    trackPurchaseCta('pricing');
    trackBeginCheckout('pricing');

    try {
      window.location.href = paymentUrl;
      failsafeRef.current = window.setTimeout(() => setIsRedirecting(false), REDIRECT_FAILSAFE_MS);
    } catch (error) {
      console.error('Failed to redirect to Razorpay payment page.', error);
      setIsRedirecting(false);
    }
  }, [isRedirecting, paymentUrl]);

  return { handlePayment, isRedirecting };
}
