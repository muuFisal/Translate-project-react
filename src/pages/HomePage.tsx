import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/ui/Seo';
import { CompetitiveEdgeSection } from '@/components/translation/CompetitiveEdgeSection';
import { CoverageSection } from '@/components/translation/CoverageSection';
import { CtaSection } from '@/components/translation/CtaSection';
import { DocumentTypesSection } from '@/components/translation/DocumentTypesSection';
import { FaqSection } from '@/components/translation/FaqSection';
import { HeroSection } from '@/components/translation/HeroSection';
import { PricingPreviewSection } from '@/components/translation/PricingPreviewSection';
import { ProcessTimelineSection } from '@/components/translation/ProcessTimelineSection';
import { QuoteCalculatorSection } from '@/components/translation/QuoteCalculatorSection';
import { ServicesGridSection } from '@/components/translation/ServicesGridSection';
import { TrustBarSection } from '@/components/translation/TrustBarSection';
import { BlogPreviewSection } from '@/components/translation/BlogPreviewSection';
import { InteractiveTestimonialsSection } from '@/components/translation/InteractiveTestimonialsSection';
import { siteConfig, type HomeSectionKey } from '@/config/site';

const sections: Record<HomeSectionKey, JSX.Element> = {
  hero: <HeroSection />,
  trustBar: <TrustBarSection />,
  services: <ServicesGridSection />,
  documents: <DocumentTypesSection />,
  process: <ProcessTimelineSection />,
  quoteCalculator: <QuoteCalculatorSection />,
  competitiveEdge: <CompetitiveEdgeSection />,
  coverage: <CoverageSection />,
  pricing: <PricingPreviewSection />,
  blogPreview: <BlogPreviewSection />,
  testimonials: <InteractiveTestimonialsSection />,
  faq: <FaqSection />,
  cta: <CtaSection />,
};

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        path="/"
        keywords={t('seo.home.keywords')}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Khaleej Translate',
          areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
          serviceType: 'Certified Translation Services',
          availableLanguage: ['Arabic', 'English', 'French', 'German', 'Turkish', 'Urdu'],
        }}
      />
      {siteConfig.homeSectionOrder.map((key) => (
        <div key={key}>{sections[key]}</div>
      ))}
    </>
  );
}
