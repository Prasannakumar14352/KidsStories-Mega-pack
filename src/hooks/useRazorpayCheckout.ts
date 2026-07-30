import { useCallback, useRef, useState } from 'react';
import { product } from '../config/product';
import { trackBeginCheckout, trackPurchaseCta } from '../lib/analytics';

const REDIRECT_FAILSAFE_MS = 4000;

/**
 * The only path in the app that opens Razorpay. Every other CTA scrolls to
 * the pricing card via scrollToPricing() instead - this hook is wired to
 * that card's button alone, and sends the customer straight to the
 * configured Razorpay Payment Link with no intermediate form or page.
 */
export function useRazorpayCheckout() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const failsafeRef = useRef<number>();

  const handlePayment = useCallback(() => {
    if (isRedirecting) return;

    const paymentUrl = product.razorpayPaymentUrl || import.meta.env.VITE_RAZORPAY_PAYMENT_URL;

    if (!paymentUrl) {
      console.error('Razorpay payment URL is not configured.');
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
  }, [isRedirecting]);

  return { handlePayment, isRedirecting };
}
