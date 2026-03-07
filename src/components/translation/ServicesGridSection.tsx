import { BriefcaseBusiness, FileBadge2, FileHeart, FileText, GraduationCap, Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons = [FileBadge2, Scale, FileHeart, GraduationCap, BriefcaseBusiness, FileText];

export function ServicesGridSection() {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true }) as Array<{ title: string; body: string; stat: string }>;

  return (
    <AnimatedSection className="section-space" animation="down">
      <div className="container-shell">
        <SectionHeading eyebrow={t('services.eyebrow')} title={t('services.title')} description={t('services.description')} />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={item.title} className="surface-card p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-brand-500">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-500">{item.stat}</div>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
