import { Clock3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PricingPreviewSection() {
  const { t } = useTranslation();
  const items = t('pricingPreview.items', { returnObjects: true }) as Array<{ title: string; price: string; body: string }>;

  return (
    <AnimatedSection className="section-space bg-surface-muted/70" animation="down">
      <div className="container-shell">
        <SectionHeading eyebrow={t('pricingPreview.eyebrow')} title={t('pricingPreview.title')} description={t('pricingPreview.description')} />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-white/5 dark:text-brand-500">{item.price}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-ink-500">{item.body}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-ink-500">
                <Clock3 className="h-4 w-4 text-brand-700 dark:text-brand-500" />
                <span>{t('pricingPreview.turnaroundHint')}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center lg:justify-start">
          <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800">
            {t('pricingPreview.viewPricing')}
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
