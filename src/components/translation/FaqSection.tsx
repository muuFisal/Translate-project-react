import { useTranslation } from 'react-i18next';
import { FAQItem } from '@/components/FAQItem';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function FaqSection() {
  const { t } = useTranslation();
  const items = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>;

  return (
    <AnimatedSection className="section-space bg-surface-muted/70" animation="scale">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')} description={t('faq.description')} />
          <div className="surface-card overflow-hidden">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80" alt="Certified translation team" className="h-80 w-full object-cover" />
          </div>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
