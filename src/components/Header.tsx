import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { headerNav } from '../config/product';
import { formatPrice } from '../lib/pricing';
import { useLaunchPricing } from '../hooks/useLaunchPricing';
import { useAnchorNav } from '../hooks/useAnchorNav';
import { useMobileMenu } from '../context/MobileMenuContext';
import { scrollToPricing } from '../lib/scrollToPricing';
import { trackPurchaseCta } from '../lib/analytics';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { menuOpen, setMenuOpen } = useMobileMenu();
  const { price } = useLaunchPricing();
  const goToAnchor = useAnchorNav();

  const handleHeaderCta = () => {
    trackPurchaseCta('header');
    scrollToPricing();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    goToAnchor(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md transition-[padding] duration-200 ${
        scrolled ? 'py-1.5' : 'py-3'
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center" aria-label="PRODXSTORE home">
          <img
            src="/assets/prodxstore-logo.png"
            alt="PRODXSTORE Digital Products Marketplace"
            className={`w-auto object-contain transition-all duration-200 ${scrolled ? 'h-7' : 'h-9'}`}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {headerNav.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-brand-orange-light"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            className="hidden sm:inline-flex"
            onClick={handleHeaderCta}
          >
            Get Instant Access — {formatPrice(price)}
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-primary lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="fixed inset-0 top-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-black/70"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-nav-drawer"
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-1 border-l border-border bg-background-secondary p-6 pt-20 shadow-2xl animate-fade-up"
          >
            {headerNav.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-3 py-3.5 text-left text-base font-medium text-text-primary transition-colors hover:bg-surface hover:text-brand-orange-light"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primary"
              size="lg"
              className="mt-4 w-full"
              onClick={() => {
                setMenuOpen(false);
                handleHeaderCta();
              }}
            >
              Get Instant Access — {formatPrice(price)}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
