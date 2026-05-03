import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, Languages, ShieldCheck } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLink, GhostLink } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

const heroSlides = [
  {
    src: '/images/hero-slide-1.png',
    altKey: 'home.hero.slide1Caption',
    captionKey: 'home.hero.slide1Caption',
  },
  {
    src: '/images/hero-slide-2.png',
    altKey: 'home.hero.slide2Caption',
    captionKey: 'home.hero.slide2Caption',
  },
  {
    src: '/images/hero-slide-3.png',
    altKey: 'home.hero.slide3Caption',
    captionKey: 'home.hero.slide3Caption',
  },
];

const AUTOPLAY_INTERVAL = 5000;

export function HeroSection() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const trustItems = [
    { icon: ShieldCheck, label: t('home.hero.trustItems.0') },
    { icon: Languages, label: t('home.hero.trustItems.1') },
    { icon: FileText, label: t('home.hero.trustItems.2') },
  ];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 dark:border-white/10">
      {/* Background */}
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

      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-6 py-6 sm:py-8 lg:min-h-[46rem] lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-10">
        {/* Left — Text Content (compact) */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex rounded-full border border-white/35 bg-white/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-800 shadow-soft backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs dark:border-white/10 dark:bg-white/5 dark:text-brand-500">
            {t('home.hero.eyebrow')}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[0.96] text-balance text-ink-900 sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.4rem] lg:leading-[1]">
            {t('home.hero.title')}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-700 sm:mt-4 sm:leading-7 lg:text-[15px] dark:text-ink-300">
            {t('home.hero.description')}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
            <ButtonLink to="/contact">
              {t('home.hero.primaryCta')}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <GhostLink to="/services">{t('home.hero.secondaryCta')}</GhostLink>
          </div>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item.label} className="glass-card p-3 sm:p-3.5">
                <item.icon className="h-4.5 w-4.5 text-brand-700 sm:h-5 sm:w-5 dark:text-brand-500" />
                <p className="mt-2 text-xs font-medium leading-5 text-ink-700 sm:mt-2.5 sm:text-sm dark:text-ink-300">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Image Carousel (bigger) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col gap-3"
        >
          {/* Carousel Container */}
          <div className="group relative overflow-hidden rounded-[24px] border border-white/20 shadow-card sm:rounded-[28px] lg:rounded-[36px]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[4/3] lg:aspect-[4/3.4]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={heroSlides[current].src}
                  src={heroSlides[current].src}
                  alt={t(heroSlides[current].altKey)}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient overlay on image */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Caption — bigger and more visible */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35 }}
                    className="font-display text-base font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-xl lg:text-2xl"
                  >
                    {t(heroSlides[current].captionKey)}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Nav Arrows — appear on hover */}
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black/55 group-hover:opacity-100 sm:left-4 sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black/55 group-hover:opacity-100 sm:right-4 sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Dots + Progress Bar */}
          <div className="flex items-center justify-center gap-2">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group/dot relative h-2.5 overflow-hidden rounded-full transition-all duration-500"
                style={{ width: i === current ? '2.5rem' : '0.625rem' }}
              >
                <span className="absolute inset-0 rounded-full bg-black/15 dark:bg-white/20" />
                {i === current && (
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full bg-brand-700 dark:bg-brand-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
                    key={`progress-${current}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => goTo(i)}
                className={`group/thumb relative overflow-hidden rounded-[12px] border-2 transition-all duration-300 sm:rounded-[16px] lg:rounded-[20px] ${
                  i === current
                    ? 'border-brand-600 shadow-lg ring-2 ring-brand-600/30 dark:border-brand-500 dark:ring-brand-500/30'
                    : 'border-transparent opacity-60 hover:opacity-90'
                }`}
              >
                <img
                  src={slide.src}
                  alt={t(slide.altKey)}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                />
                {i === current && (
                  <motion.div
                    layoutId="thumb-highlight"
                    className="absolute inset-0 rounded-[10px] border-2 border-brand-600/40 sm:rounded-[14px] lg:rounded-[18px] dark:border-brand-500/40"
                    transition={{ duration: 0.35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
