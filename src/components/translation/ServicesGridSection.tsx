import { motion } from 'framer-motion';
import { BriefcaseBusiness, FileBadge2, FileHeart, FileText, GraduationCap, Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons = [FileBadge2, Scale, FileHeart, GraduationCap, BriefcaseBusiness, FileText];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

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
              <motion.article
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.35, ease: 'easeOut' },
                }}
                className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-black/5 bg-surface-strong shadow-soft transition-all duration-500 hover:shadow-[0_24px_60px_rgba(45,86,63,0.14),0_6px_16px_rgba(0,0,0,0.06)] hover:border-brand-200/60 dark:border-white/10 dark:hover:border-brand-600/30 dark:hover:shadow-[0_24px_60px_rgba(45,86,63,0.2)]"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-100/0 transition-all duration-500 group-hover:from-brand-50/40 group-hover:via-brand-50/20 group-hover:to-brand-100/30 dark:group-hover:from-brand-900/10 dark:group-hover:via-transparent dark:group-hover:to-brand-900/5" />

                {/* Shine effect */}
                <div className="absolute -inset-full top-0 z-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 transition-all duration-700 group-hover:animate-none group-hover:opacity-0 dark:via-white/5" />

                <div className="relative p-6">
                  {/* Icon */}
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-50 text-brand-700 transition-all duration-400 group-hover:bg-brand-100 group-hover:shadow-[0_4px_20px_rgba(45,86,63,0.15)] dark:bg-white/5 dark:text-brand-500 dark:group-hover:bg-white/10"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -8, 8, -4, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-400 group-hover:scale-110" />
                  </motion.div>

                  {/* Stat badge */}
                  <div className="mt-5 inline-flex rounded-full bg-brand-50/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 transition-all duration-400 group-hover:bg-brand-100/80 group-hover:text-brand-800 dark:bg-white/5 dark:text-brand-500 dark:group-hover:bg-white/10 dark:group-hover:text-brand-400">
                    {item.stat}
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-display text-3xl font-semibold text-ink-900 transition-colors duration-300 group-hover:text-brand-900 dark:text-white dark:group-hover:text-brand-300">
                    {item.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-3 text-sm leading-7 text-ink-500 transition-colors duration-300 group-hover:text-ink-700 dark:group-hover:text-ink-200">
                    {item.body}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-5 h-[2px] w-0 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all duration-500 group-hover:w-16 dark:from-brand-400 dark:to-brand-600" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
