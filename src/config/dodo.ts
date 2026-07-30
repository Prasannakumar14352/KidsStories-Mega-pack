/**
 * Dodo Payments hosted checkout link. Dodo acts as Merchant of Record and
 * auto-detects the visitor's location, currency and available local payment
 * methods on its own hosted page - this app just needs the one static link,
 * shown to every visitor regardless of region.
 */
export const DODO_PAYMENT_LINK = import.meta.env.VITE_DODO_PAYMENT_LINK || 'https://dodo.pe/mrd5y57146f';
