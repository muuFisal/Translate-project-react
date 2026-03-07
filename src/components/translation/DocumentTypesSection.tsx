import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function DocumentTypesSection() {
  const { t } = useTranslation();
  const columns = t('documents.columns', { returnObjects: true }) as Array<{ title: string; items: string[] }>;

  return (
    <AnimatedSection className="section-space bg-surface-muted/70" animation="left">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div>
          <SectionHeading eyebrow={t('documents.eyebrow')} title={t('documents.title')} description={t('documents.description')} />
          <div className="surface-card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
              alt="Official document translation"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {columns.map((column) => (
            <article key={column.title} className="surface-card p-6">
              <h3 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">{column.title}</h3>
              <div className="mt-5 grid gap-3">
                {column.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
