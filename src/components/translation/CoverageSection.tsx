import { Building2, Landmark, MapPinned } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons = [MapPinned, Building2, Landmark];

export function CoverageSection() {
  const { t } = useTranslation();
  const cities = t('coverage.cities', { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <AnimatedSection className="section-space" animation="left">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <SectionHeading eyebrow={t('coverage.eyebrow')} title={t('coverage.title')} description={t('coverage.description')} />
          <div className="surface-card p-6">
            <p className="text-sm leading-7 text-ink-500">{t('coverage.sidebar')}</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {cities.map((city, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={city.title} className="surface-card p-6">
                <Icon className="h-5 w-5 text-brand-700 dark:text-brand-500" />
                <h3 className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-white">{city.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{city.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
