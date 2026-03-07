import { BadgeCheck, Clock3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/ui/Seo';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PricingPage() {
  const { t } = useTranslation();
  const plans = t('pricingPage.plans', { returnObjects: true }) as Array<{ title: string; price: string; body: string; features: string[] }>;
  const addOns = t('pricingPage.addOns', { returnObjects: true }) as Array<{ title: string; price: string }>;

  return (
    <>
      <Seo title={t('seo.pricing.title')} description={t('seo.pricing.description')} path="/pricing" keywords={t('seo.pricing.keywords')} />
      <AnimatedSection className="section-space" animation="down">
        <div className="container-shell">
          <SectionHeading as="h1" eyebrow={t('pricingPage.eyebrow')} title={t('pricingPage.title')} description={t('pricingPage.description')} />
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.title} className="surface-card p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">{plan.title}</h3>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-white/5 dark:text-brand-500">{plan.price}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-ink-500">{plan.body}</p>
                <div className="mt-5 grid gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-ink-500">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space bg-surface-muted/70" animation="right">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={t('pricingPage.addOnsEyebrow')} title={t('pricingPage.addOnsTitle')} description={t('pricingPage.addOnsDescription')} />
            <div className="surface-card p-6 text-sm leading-7 text-ink-500">{t('pricingPage.addOnsSidebar')}</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {addOns.map((item) => (
              <article key={item.title} className="surface-card p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                  <span className="text-sm font-semibold text-brand-700 dark:text-brand-500">{item.price}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-ink-500">
                  <Clock3 className="h-4 w-4 text-brand-700 dark:text-brand-500" />
                  <span>{t('pricingPage.fastTurnaround')}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
