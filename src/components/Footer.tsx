import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { product } from '../config/product';
import { useAnchorNav } from '../hooks/useAnchorNav';
import { Container } from './ui/Container';

const productLinks = [
  { label: "What's Included", href: '#included' },
  { label: 'Story Categories', href: '#categories' },
  { label: 'Exclusive Bonuses', href: '#bonuses' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const supportLinks = [
  { label: 'Contact Support', to: '/contact' },
  { label: 'Download Help', to: '/download-help' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'Delivery Policy', to: '/delivery-policy' },
];

const legalLinks = [
  { label: 'Terms and Conditions', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Personal and Classroom Licence', to: '/license' },
  { label: 'Disclaimer', to: '/disclaimer' },
];

export function Footer() {
  const goToAnchor = useAnchorNav();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <img
              src="/assets/prodxstore-logo.png"
              alt="PRODXSTORE Digital Products Marketplace"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary">
              PRODXSTORE is a digital-products marketplace providing practical downloadable resources for
              creators, families, educators and growing businesses.
            </p>
            <a
              href={`mailto:${product.supportEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-orange-light hover:text-brand-orange-light/80"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {product.supportEmail}
            </a>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wide text-text-primary">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => goToAnchor(link.href)}
                    className="text-sm text-text-secondary transition-colors hover:text-brand-orange-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wide text-text-primary">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-secondary transition-colors hover:text-brand-orange-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wide text-text-primary">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-secondary transition-colors hover:text-brand-orange-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-text-muted">
          This is a digital product. No physical item will be shipped.
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row">
          <p>&copy; {year} PRODXSTORE. All rights reserved.</p>
          <p>Secure digital checkout • Instant delivery • One-time payment</p>
        </div>
      </Container>
    </footer>
  );
}
