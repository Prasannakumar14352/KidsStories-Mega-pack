import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <SEO title="Page Not Found | PRODXSTORE" description="The page you are looking for could not be found." path="/404" noIndex />
      <img
        src="/assets/prodxstore-logo.png"
        alt="PRODXSTORE Digital Products Marketplace"
        className="h-10 w-auto object-contain"
      />
      <h1 className="mt-8 font-display text-3xl font-bold text-text-primary">Page Not Found</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
        The page you are looking for does not exist or may have moved. Return to the product page to explore
        the 50 Illustrated Kids Stories Mega Bundle.
      </p>
      <Link to="/" className="mt-8">
        <Button variant="primary" size="lg">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
