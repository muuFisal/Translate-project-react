import { CheckCircle2, Clock3, FileUp, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons = [FileUp, CheckCircle2, Clock3, Send];

export function ProcessTimelineSection() {
  const { t } = useTranslation();
  const steps = t('process.items', { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <AnimatedSection className="section-space bg-brand-900 text-white dark:bg-surface-strong dark:text-ink-900" animation="up">
      <div className="container-shell">
        <SectionHeading eyebrow={t('process.eyebrow')} title={t('process.title')} description={t('process.description')} />
        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={step.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md dark:border-black/5 dark:bg-surface-muted">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-300 text-brand-900 dark:bg-brand-100 dark:text-brand-700">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/65 dark:text-ink-500">0{index + 1}</div>
                <h3 className="mt-3 font-display text-3xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75 dark:text-ink-500">{step.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
