// --- DISABLED: Region-based gateway config (Razorpay + PayPal) — kept for reference ---
// Replaced by Dodo Payments, a Merchant of Record that auto-detects the
// visitor's location/currency/payment methods on its own hosted page, so
// this app no longer needs to choose a gateway per region. To restore,
// re-enable this file and src/hooks/usePricing.ts, then wire Checkout.tsx
// back to them.
//
// import { product } from './product';
//
// export type Region = 'IN' | 'INTL';
// export type Gateway = 'razorpay' | 'paypal';
// export type Currency = 'INR' | 'USD';
//
// export interface RegionPricing {
//   region: Region;
//   currency: Currency;
//   gateway: Gateway;
//   launchAmount: number;
//   regularAmount: number;
//   /** Only set for the 'razorpay' gateway - the hosted Razorpay Payment Page URL. */
//   razorpayUrl?: string;
// }
//
// /**
//  * Single client-side config module for region-based pricing. India pays in
//  * INR via Razorpay; every other country pays in USD via PayPal. Both the
//  * pricing hook and the Checkout component read from this one place only, so
//  * currency/gateway/amount can never drift apart per region.
//  */
// export const regionPricing: Record<Region, RegionPricing> = {
//   IN: {
//     region: 'IN',
//     currency: 'INR',
//     gateway: 'razorpay',
//     launchAmount: product.launchPrice,
//     regularAmount: product.regularPrice,
//     razorpayUrl: import.meta.env.VITE_RAZORPAY_PAYMENT_PAGE_URL || '',
//   },
//   INTL: {
//     region: 'INTL',
//     currency: 'USD',
//     gateway: 'paypal',
//     launchAmount: product.launchPriceUSD,
//     regularAmount: product.regularPriceUSD,
//   },
// };
//
// /**
//  * Default region whenever geolocation hasn't resolved yet, failed, or timed
//  * out. Never inferred from browser locale/timezone - only ever overridden by
//  * a confirmed India IP lookup or the visitor's own manual toggle.
//  */
// export const DEFAULT_REGION: Region = 'INTL';
// --- END DISABLED: Region-based gateway config ---
