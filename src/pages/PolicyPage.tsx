import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EFFECTIVE_DATE, legalPages } from '../content/legalPages';
import { SEO } from '../components/SEO';
import { Container } from '../components/ui/Container';
import { Footer } from '../components/Footer';

interface PolicyPageProps {
  slug: string;
}

export function PolicyPage({ slug }: PolicyPageProps) {
  const page = legalPages[slug];

  if (!page) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${page.title} | PRODXSTORE`} description={page.description} path={`/${slug}`} />

      <header className="border-b border-border py-5">
        <Container className="flex items-center justify-between">
          <Link to="/" aria-label="Back to PRODXSTORE home">
            <img
              src="/assets/prodxstore-logo.png"
              alt="PRODXSTORE Digital Products Marketplace"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-brand-orange-light"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </Container>
      </header>

      <main className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">{page.title}</h1>
          <p className="mt-2 text-sm text-text-muted">Last updated: {EFFECTIVE_DATE}</p>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-text-secondary">{page.intro}</p>

          <div className="mt-10 space-y-8">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-lg font-semibold text-text-primary sm:text-xl">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="max-w-prose text-sm leading-relaxed text-text-secondary sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
