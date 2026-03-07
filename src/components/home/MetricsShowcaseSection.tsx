import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Metric = { value: string; label: string };

export function MetricsShowcaseSection({ metrics }: { metrics: Metric[] }) {
  const { t } = useTranslation();

  const images = [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  ];

  return (
    <AnimatedSection className="section-space bg-surface-muted/70" animation="right">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading eyebrow={t('home.metrics.eyebrow')} title={t('home.metrics.title')} description={t('home.metrics.description')} />
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="surface-card p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-500">0{index + 1}</div>
                <div className="mt-3 font-display text-4xl font-semibold text-ink-900">{metric.value}</div>
                <p className="mt-2 text-sm text-ink-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((image, index) => (
            <div key={image} className={`overflow-hidden rounded-[28px] ${index === 0 ? 'sm:col-span-2' : ''}`}>
              <img src={image} alt="Landscape showcase" className={`w-full object-cover transition duration-700 hover:scale-[1.03] ${index === 0 ? 'h-72' : 'h-56'}`} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
