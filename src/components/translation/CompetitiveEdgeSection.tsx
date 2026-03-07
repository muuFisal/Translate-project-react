import { BadgeCheck, Bot, Search, Smartphone, TimerReset, UserRoundCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons = [TimerReset, Search, Smartphone, UserRoundCheck, Bot, BadgeCheck];

export function CompetitiveEdgeSection() {
  const { t } = useTranslation();
  const items = t('competitiveEdge.items', { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <AnimatedSection className="section-space bg-surface-muted/70" animation="scale">
      <div className="container-shell">
        <SectionHeading eyebrow={t('competitiveEdge.eyebrow')} title={t('competitiveEdge.title')} description={t('competitiveEdge.description')} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={item.title} className="surface-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-brand-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
