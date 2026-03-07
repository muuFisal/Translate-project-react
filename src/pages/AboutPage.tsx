import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AboutPage() {
  const { t } = useTranslation();
  const values = t('about.values', { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <>
      <Seo title={t('seo.about.title')} description={t('seo.about.description')} path="/about" keywords={t('seo.about.keywords')} />
      <AnimatedSection className="section-space" animation="left">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading as="h1" eyebrow={t('about.eyebrow')} title={t('about.title')} description={t('about.description')} />
            <p className="text-base leading-8 text-ink-500">{t('about.story')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] sm:col-span-2">
              <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80" alt="Translation office" className="h-72 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[30px]">
              <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80" alt="Official documents" className="h-56 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[30px]">
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80" alt="Customer support" className="h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space bg-surface-muted/70" animation="right">
        <div className="container-shell">
          <SectionHeading eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} description={t('about.valuesDescription')} />
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="surface-card p-6">
                <h3 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-500">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
