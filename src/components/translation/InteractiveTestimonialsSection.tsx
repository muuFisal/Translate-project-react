import { BadgeCheck, Star } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';

const reviewDecorators = [
  {
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80',
  },
  {
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  },
  {
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=240&q=80',
  },
];

export function InteractiveTestimonialsSection() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true }) as Array<{ name: string; role: string; quote: string }>;
  const highlights = t('testimonials.highlights', { returnObjects: true }) as string[];
  const reviews = items.map((item, index) => ({
    ...item,
    rating: reviewDecorators[index]?.rating ?? 5,
    avatar: reviewDecorators[index]?.avatar ?? reviewDecorators[0].avatar,
  }));
  const average = useMemo(
    () => (reviews.reduce((sum, item) => sum + item.rating, 0) / Math.max(reviews.length, 1)).toFixed(1),
    [reviews],
  );

  return (
    <AnimatedSection className="section-space" animation="center">
      <div className="container-shell">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} description={t('testimonials.description')} />

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="surface-card min-w-[180px] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-500">{t('testimonials.averageLabel')}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="font-display text-5xl font-semibold text-ink-900 dark:text-white">{average}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current text-amber-400" />)}
                  </div>
                </div>
              </div>
              <div className="surface-card min-w-[180px] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-500">{t('testimonials.totalLabel')}</p>
                <p className="mt-3 font-display text-5xl font-semibold text-ink-900 dark:text-white">{reviews.length}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-5">
              {reviews.map((item, index) => (
                <article key={`${item.name}-${index}`} className="surface-card p-5">
                  <div className="flex items-start gap-4">
                    <img src={item.avatar} alt={item.name} className="h-14 w-14 rounded-2xl object-cover" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{item.name}</h3>
                          <p className="text-sm text-ink-500">{item.role}</p>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: item.rating }).map((_, starIndex) => <Star key={starIndex} className="h-4 w-4 fill-current text-amber-400" />)}
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-ink-500">{item.quote}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="surface-card h-fit p-6 lg:sticky lg:top-28">
            <h3 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">{t('testimonials.sidebarTitle')}</h3>
            <p className="mt-4 text-sm leading-7 text-ink-500">{t('testimonials.sidebarDescription')}</p>

            <div className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[24px] border border-black/5 bg-surface-muted/60 px-4 py-4 text-sm leading-7 text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300">
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800">
                {t('testimonials.primaryCta')}
              </Link>
              <a href={`https://wa.me/${siteConfig.brand.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-black/5 px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-surface-muted dark:border-white/10 dark:text-white">
                {t('testimonials.secondaryCta')}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </AnimatedSection>
  );
}
