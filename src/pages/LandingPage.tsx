import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { product } from '../config/product';
import { useLaunchPricing } from '../hooks/useLaunchPricing';
import { trackEvent } from '../lib/analytics';
import { SEO } from '../components/SEO';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { StatsStrip } from '../components/StatsStrip';
import { BenefitsSection } from '../components/BenefitsSection';
import { IncludedSection } from '../components/IncludedSection';
import { CategoryGrid } from '../components/CategoryGrid';
import { FormatsSection } from '../components/FormatsSection';
import { BonusSection } from '../components/BonusSection';
import { AudienceSection } from '../components/AudienceSection';
import { HowItWorks } from '../components/HowItWorks';
import { ValueStack } from '../components/ValueStack';
import { PricingSection } from '../components/PricingSection';
import { AccessPromise } from '../components/AccessPromise';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { MobilePurchaseBar } from '../components/MobilePurchaseBar';

export function LandingPage() {
  const { price, isLaunchActive } = useLaunchPricing();
  const { hash } = useLocation();

  useEffect(() => {
    trackEvent('view_item', { item_name: product.name, price });
  }, [price]);

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.replace('#', ''));
    el?.scrollIntoView({ block: 'start' });
  }, [hash]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: product.brand },
    category: 'Digital Download',
    url: `${product.siteUrl}/`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price,
      availability: isLaunchActive
        ? 'https://schema.org/InStock'
        : 'https://schema.org/InStock',
      url: `${product.siteUrl}/`,
    },
  };

  return (
    <>
      <SEO
        title="50 Illustrated Kids Stories Mega Bundle | PRODXSTORE"
        description="Download 50 illustrated kids stories in PDF and editable DOCX formats, plus five exclusive reading bonuses. A complete digital reading bundle for children ages 6-12."
        path="/"
        structuredData={structuredData}
      />
      <AnnouncementBar />
      <Header />
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <StatsStrip />
        <BenefitsSection />
        <IncludedSection />
        <CategoryGrid />
        <FormatsSection />
        <BonusSection />
        <AudienceSection />
        <HowItWorks />
        <ValueStack />
        <PricingSection />
        <AccessPromise />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobilePurchaseBar />
    </>
  );
}
