import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ButtonLink, GhostLink } from '@/components/ui/Button';

type Metric = { value: string; label: string };

export function HeroSection({ metrics }: { metrics: Metric[] }) {
  const { t } = useTranslation();

  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 dark:border-white/10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=80"
          alt="Luxury landscape background"
          loading="eager"
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(244,239,230,0.94),rgba(244,239,230,0.76),rgba(16,24,20,0.58))] dark:bg-[linear-gradient(135deg,rgba(7,12,9,0.74),rgba(7,12,9,0.58),rgba(7,12,9,0.86))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(108,137,105,0.22),transparent_32%)]" />
      </div>

      <div className="container-shell relative flex min-h-[calc(100vh-5rem)] flex-col justify-between gap-10 py-8 sm:py-10 lg:min-h-[44rem] lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex rounded-full border border-white/35 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-800 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-brand-500">
              {t('home.hero.eyebrow')}
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[0.94] text-balance text-ink-900 sm:text-5xl md:text-6xl lg:text-7xl">
              {t('home.hero.title')}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-700 sm:text-base sm:leading-8 lg:text-lg dark:text-ink-300">
              {t('home.hero.description')}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">
                {t('common.startProject')}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <GhostLink to="/projects">{t('common.exploreProjects')}</GhostLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-[28px] sm:col-span-2 lg:rounded-[36px]">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
                alt="Landscape hero"
                loading="lazy"
                className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[420px]"
              />
              <div className="hero-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/15 bg-black/30 p-4 text-white backdrop-blur-md sm:left-5 sm:right-auto sm:max-w-[22rem] sm:p-5 lg:rounded-[28px]">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/75 sm:text-xs">{t('home.hero.badge')}</p>
                <p className="mt-2 font-display text-2xl font-semibold sm:mt-3 sm:text-3xl">{t('home.hero.badgeTitle')}</p>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/35 bg-white/70 p-5 shadow-soft backdrop-blur-md sm:p-6 dark:border-white/10 dark:bg-white/5 lg:rounded-[28px]">
              <Sparkles className="h-7 w-7 text-brand-700 dark:text-brand-500" />
              <p className="mt-4 font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-white">{t('home.hero.cardTitle')}</p>
              <p className="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">{t('home.hero.cardBody')}</p>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-white/35 shadow-soft dark:border-white/10 lg:rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt="Garden lounge"
                loading="lazy"
                className="h-full min-h-[220px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="pb-2 sm:pb-4 lg:pb-2">
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 + index * 0.08 }}
                className="rounded-[24px] border border-white/35 bg-white/70 p-5 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/5 lg:rounded-[28px]"
              >
                <div className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl dark:text-white">{metric.value}</div>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
