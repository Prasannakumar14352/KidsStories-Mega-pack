import { product } from '../config/product';

const formatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });
const usdFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export function formatPrice(amount: number): string {
  return `${product.currency}${formatter.format(amount)}`;
}

export function formatUSD(amount: number): string {
  return usdFormatter.format(amount);
}
