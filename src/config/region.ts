import { product } from './product';

export type Region = 'IN' | 'INTL';
export type Gateway = 'prodxstore' | 'razorpay' | 'superprofile' | 'paypal';
export type Currency = 'INR' | 'USD';

export interface RegionPricing {
  region: Region;
  currency: Currency;
  gateway: Gateway;
  launchAmount: number;
  regularAmount: number;
  /** Only set when gateway is 'razorpay' - the hosted Razorpay Payment Page URL. */
  razorpayUrl?: string;
  /** Only set when gateway is 'superprofile' - the hosted SuperProfile checkout URL. */
  superProfileUrl?: string;
  /** Only set when gateway is 'prodxstore' - the shared ProdXStore checkout (pay.prodxstore.com). */
  prodxstoreUrl?: string;
}

/**
 * Single client-side config module for region-based pricing. India pays in
 * INR via a hosted checkout link (currently pay.prodxstore.com); every other
 * country pays in USD via PayPal. Both the pricing hook and the Checkout
 * component read from this one place only, so currency/gateway/amount can
 * never drift apart per region.
 *
 * To swap India's gateway, move the comment markers below so exactly one
 * block is active - nothing else in the app needs to change.
 */
export const regionPricing: Record<Region, RegionPricing> = {
  IN: {
    region: 'IN',
    currency: 'INR',
    launchAmount: product.launchPrice,
    regularAmount: product.regularPrice,

    // --- India via Razorpay (DISABLED - uncomment to re-enable) ---
    // gateway: 'razorpay',
    // razorpayUrl: import.meta.env.VITE_RAZORPAY_PAYMENT_PAGE_URL || '',

    // --- India via SuperProfile (DISABLED - uncomment to re-enable) ---
    // gateway: 'superprofile',
    // superProfileUrl: import.meta.env.VITE_SUPERPROFILE_PAYMENT_URL || '',

    // --- India via ProdXStore checkout (ACTIVE) ---
    // One Razorpay checkout for every ProdXStore site. Price comes from the
    // product in hq.prodxstore.com/store; after payment the buyer is sent to
    // this site's /thank-you page.
    gateway: 'prodxstore',
    prodxstoreUrl:
      import.meta.env.VITE_PRODXSTORE_CHECKOUT_URL ||
      'https://pay.prodxstore.com/checkout/kids-stories-bundle',
  },
  INTL: {
    region: 'INTL',
    currency: 'USD',
    gateway: 'paypal',
    launchAmount: product.launchPriceUSD,
    regularAmount: product.regularPriceUSD,
  },
};

/**
 * Default region whenever geolocation hasn't resolved yet, failed, or timed
 * out. Never inferred from browser locale/timezone - only ever overridden by
 * a confirmed India IP lookup or the visitor's own manual toggle.
 */
export const DEFAULT_REGION: Region = 'INTL';
