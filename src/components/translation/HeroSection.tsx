import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, FileText, Languages, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLink, GhostLink } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function HeroSection() {
  const { t } = useTranslation();
  const docOptions = t('quoteCalculator.docOptions', { returnObjects: true }) as Array<{ label: string; value: string; base: number }>;
  const speedOptions = t('quoteCalculator.speedOptions', { returnObjects: true }) as Array<{ label: string; value: string; multiplier: number }>;

  const [docType, setDocType] = useState(docOptions[0]?.value ?? 'id');
  const [pages, setPages] = useState(1);
  const [speed, setSpeed] = useState(speedOptions[0]?.value ?? 'standard');

  const estimate = useMemo(() => {
    const doc = docOptions.find((item) => item.value === docType) ?? docOptions[0];
    const spd = speedOptions.find((item) => item.value === speed) ?? speedOptions[0];
    return Math.round((doc?.base ?? 50) * Math.max(1, pages) * (spd?.multiplier ?? 1));
  }, [docOptions, docType, pages, speed, speedOptions]);

  const trustItems = [
    { icon: ShieldCheck, label: t('home.hero.trustItems.0') },
    { icon: Languages, label: t('home.hero.trustItems.1') },
    { icon: FileText, label: t('home.hero.trustItems.2') },
  ];

  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 dark:border-white/10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={siteConfig.assets.heroBackground}
          alt="Professional document translation"
          loading="eager"
          className="absolute inset-0 h-full w-full scale-[1.03] object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,244,238,0.96),rgba(247,244,238,0.86),rgba(17,38,28,0.72))] dark:bg-[linear-gradient(135deg,rgba(7,12,9,0.76),rgba(7,12,9,0.64),rgba(7,12,9,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(108,137,105,0.22),transparent_34%)]" />
      </div>

      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-8 py-8 sm:py-10 lg:min-h-[46rem] lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:py-12">
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
              {t('home.hero.primaryCta')}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <GhostLink to="/services">{t('home.hero.secondaryCta')}</GhostLink>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item.label} className="glass-card p-4">
                <item.icon className="h-5 w-5 text-brand-700 dark:text-brand-500" />
                <p className="mt-3 text-sm font-medium text-ink-700 dark:text-ink-300">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="glass-card p-5 sm:p-6 lg:p-7">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-500">
            <BadgeCheck className="h-4 w-4" />
            {t('home.hero.quoteCardEyebrow')}
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl dark:text-white">{t('home.hero.quoteCardTitle')}</h2>
          <p className="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">{t('home.hero.quoteCardDescription')}</p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
              {t('quoteCalculator.documentType')}
              <select value={docType} onChange={(e) => setDocType(e.target.value)} className="field-input">
                {docOptions.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
                {t('quoteCalculator.pages')}
                <input type="number" min={1} value={pages} onChange={(e) => setPages(Number(e.target.value) || 1)} className="field-input" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
                {t('quoteCalculator.turnaround')}
                <select value={speed} onChange={(e) => setSpeed(e.target.value)} className="field-input">
                  {speedOptions.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] bg-brand-900 p-5 text-white dark:bg-surface-strong dark:text-ink-900">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65 dark:text-ink-500">{t('quoteCalculator.estimatedPrice')}</p>
                <p className="mt-2 font-display text-4xl font-semibold">{estimate} SAR</p>
              </div>
              <div className="text-sm leading-7 text-white/75 dark:text-ink-500">{t('quoteCalculator.note')}</div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[28px] border border-white/15">
            <img src={siteConfig.assets.heroSecondary} alt="Translation team" className="h-44 w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
