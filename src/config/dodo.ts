// --- DISABLED: Dodo Payments (kept for reference) ---
// Reverted back to the Razorpay + PayPal region split (see
// src/components/Checkout.tsx, src/hooks/usePricing.ts, src/config/region.ts).
// To restore Dodo, re-enable this file and swap Checkout.tsx's body back.
//
// /**
//  * Dodo Payments hosted checkout link. Dodo acts as Merchant of Record and
//  * auto-detects the visitor's location, currency and available local payment
//  * methods on its own hosted page - this app just needs the one static link,
//  * shown to every visitor regardless of region.
//  */
// export const DODO_PAYMENT_LINK = import.meta.env.VITE_DODO_PAYMENT_LINK || 'https://dodo.pe/mrd5y57146f';
// --- END DISABLED: Dodo Payments ---
