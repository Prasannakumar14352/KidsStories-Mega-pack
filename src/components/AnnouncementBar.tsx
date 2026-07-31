import { product } from '../config/product';
import { formatPrice } from '../lib/pricing';
import { useLaunchPricing } from '../hooks/useLaunchPricing';
import { scrollToPricing } from '../lib/scrollToPricing';
import { trackPurchaseCta } from '../lib/analytics';
import { CountdownTimer } from './CountdownTimer';

export function AnnouncementBar() {
  const { isLaunchActive, price } = useLaunchPricing();

  if (!isLaunchActive) return null;

  const handleClick = () => {
    trackPurchaseCta('announcement_bar');
    scrollToPricing();
  };

  return (
    <div className="relative z-[60] bg-gradient-to-r from-black via-[#2a1200] to-brand-orange-dark text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-4 sm:px-6">
        <p className="text-xs font-medium leading-snug sm:text-sm">
          <span className="font-semibold">Launch Special:</span> Get the Complete 50-Story Bundle for{' '}
          <span className="font-bold text-brand-orange-light">{formatPrice(price)}</span> — Regular Price{' '}
          <span className="line-through opacity-70">{formatPrice(product.regularPrice)}</span>
        </p>
        <span className="hidden rounded-full border border-white/25 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide sm:inline-block">
          One-Time Payment
        </span>
        <CountdownTimer />
        <button
          type="button"
          onClick={handleClick}
          className="shrink-0 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-black transition-transform hover:-translate-y-0.5 hover:bg-brand-orange-light hover:text-white min-h-[32px]"
        >
          Get the Bundle
        </button>
      </div>
    </div>
  );
}
