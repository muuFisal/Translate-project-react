import { CheckCircle2, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/ui/Seo';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ServicesPage() {
  const { t } = useTranslation();
  const groups = t('servicesPage.groups', { returnObjects: true }) as Array<{ title: string; items: string[] }>;
  const languages = t('servicesPage.languages', { returnObjects: true }) as string[];

  return (
    <>
      <Seo title={t('seo.services.title')} description={t('seo.services.description')} path="/services" keywords={t('seo.services.keywords')} />
      <AnimatedSection className="section-space" animation="up">
        <div className="container-shell">
          <SectionHeading as="h1" eyebrow={t('servicesPage.eyebrow')} title={t('servicesPage.title')} description={t('servicesPage.description')} />
          <div className="grid gap-6 lg:grid-cols-3">
            {groups.map((group) => (
              <article key={group.title} className="surface-card p-6">
                <h3 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">{group.title}</h3>
                <div className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-ink-500">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space bg-surface-muted/70" animation="left">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow={t('servicesPage.languagesEyebrow')} title={t('servicesPage.languagesTitle')} description={t('servicesPage.languagesDescription')} />
            <div className="surface-card p-6 text-sm leading-7 text-ink-500">
              {t('servicesPage.languagesSidebar')}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {languages.map((item) => (
              <div key={item} className="surface-card flex items-center gap-3 p-5">
                <Globe2 className="h-5 w-5 text-brand-700 dark:text-brand-500" />
                <span className="text-sm font-medium text-ink-700 dark:text-ink-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
