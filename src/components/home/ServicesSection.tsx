import { useTranslation } from 'react-i18next';
import { ServiceCard } from '@/components/ServiceCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-space" animation="down">
      <div className="container-shell">
        <SectionHeading eyebrow={t('home.services.eyebrow')} title={t('home.services.title')} description={t('home.services.description')} />
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map(({ key, icon, stats }) => (
            <ServiceCard key={key} icon={icon} stat={stats} title={t(`servicesData.${key}.title`)} body={t(`servicesData.${key}.body`)} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
