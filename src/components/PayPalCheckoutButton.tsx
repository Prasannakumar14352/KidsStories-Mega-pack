import { useNavigate } from 'react-router-dom';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import type { CreateOrderActions, OnApproveActions, OnApproveData } from '@paypal/paypal-js';
import { trackBeginCheckout, trackPurchaseCta } from '../lib/analytics';

interface PayPalCheckoutButtonProps {
  amount: number;
}

export function PayPalCheckoutButton({ amount }: PayPalCheckoutButtonProps) {
  const navigate = useNavigate();
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <p className="rounded-lg border border-border bg-black/20 px-4 py-3 text-center text-xs text-text-muted">
        PayPal checkout is not configured yet. Set VITE_PAYPAL_CLIENT_ID to enable it.
      </p>
    );
  }

  return (
    <PayPalScriptProvider options={{ clientId, currency: 'USD', intent: 'capture' }}>
      <PayPalButtons
        style={{ layout: 'vertical', color: 'gold', shape: 'pill', label: 'pay' }}
        createOrder={(_data, actions: CreateOrderActions) =>
          actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [{ amount: { value: amount.toFixed(2), currency_code: 'USD' } }],
          })
        }
        onApprove={async (_data: OnApproveData, actions: OnApproveActions) => {
          if (!actions.order) return;
          const captured = await actions.order.capture();
          trackPurchaseCta('pricing');
          trackBeginCheckout('pricing');

          const email = captured.payer?.email_address ?? captured.payment_source?.paypal?.email_address ?? null;

          navigate('/thank-you', { state: { email, orderId: captured.id ?? null, paid: true } });
        }}
        onError={(error) => {
          // Payment failed - do NOT redirect to the thank-you / download page.
          console.error('PayPal checkout error.', error);
        }}
        onCancel={() => {
          // Visitor cancelled - do NOT redirect to the thank-you / download page.
        }}
      />
    </PayPalScriptProvider>
  );
}
