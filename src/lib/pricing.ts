import { product } from '../config/product';

const formatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });

export function formatPrice(amount: number): string {
  return `${product.currency}${formatter.format(amount)}`;
}
