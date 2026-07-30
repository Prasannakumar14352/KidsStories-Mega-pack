import { useEffect, useState } from 'react';
import { formatPrice } from '../lib/pricing';
import { useLaunchPricing } from '../hooks/useLaunchPricing';
import { scrollToPricing } from '../lib/scrollToPricing';
import { trackPurchaseCta } from '../lib/analytics';
import { useMobileMenu } from '../context/MobileMenuContext';

export function MobilePurchaseBar() {
  const [visible, setVisible] = useState(false);
  const { menuOpen } = useMobileMenu();
  const { price } = useLaunchPricing();

  const handleMobileCta = () => {
    trackPurchaseCta('mobile_sticky_bar');
    scrollToPricing();
  };

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px' },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible || menuOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-bright bg-background-secondary/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-text-muted">Launch Price</p>
          <p className="font-display text-lg font-bold text-brand-orange-light">{formatPrice(price)}</p>
        </div>
        <button
          type="button"
          onClick={handleMobileCta}
          className="min-h-[44px] shrink-0 rounded-full bg-gradient-to-b from-brand-orange-light to-brand-orange-dark px-6 text-sm font-display font-semibold text-white shadow-orange-glow"
        >
          Get Access
        </button>
      </div>
    </div>
  );
}
