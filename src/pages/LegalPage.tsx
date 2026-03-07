import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function LegalPage({ type }: { type: 'terms' | 'privacy' }) {
  const { t } = useTranslation();
  const prefix = type === 'terms' ? 'terms' : 'privacy';
  const sections = t(`${prefix}.sections`, { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <>
      <Seo title={t(`seo.${prefix}.title`)} description={t(`seo.${prefix}.description`)} path={`/${type}`} />
      <section className="section-space">
        <div className="container-shell max-w-4xl">
          <SectionHeading as="h1" eyebrow={t(`${prefix}.eyebrow`)} title={t(`${prefix}.title`)} description={t(`${prefix}.description`)} />
          <div className="grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="surface-card p-6 sm:p-8">
                <h2 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">{section.title}</h2>
                <p className="mt-4 text-sm leading-8 text-ink-500">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
