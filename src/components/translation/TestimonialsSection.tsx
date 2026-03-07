import { useTranslation } from 'react-i18next';
import { TestimonialCard } from '@/components/TestimonialCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TestimonialsSection() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true }) as Array<{ quote: string; name: string; role: string }>;

  return (
    <AnimatedSection className="section-space" animation="center">
      <div className="container-shell">
        <SectionHeading eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} description={t('testimonials.description')} align="center" />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <TestimonialCard key={item.name} quote={item.quote} name={item.name} role={item.role} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
