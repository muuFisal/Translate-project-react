import { motion } from 'framer-motion';
import { Building2, Clock3, Globe2, ShieldCheck, Stamp, WalletCards } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function TrustBarSection() {
  const { t } = useTranslation();
  const items = [
    { icon: Stamp, text: t('trustBar.items.0') },
    { icon: ShieldCheck, text: t('trustBar.items.1') },
    { icon: Globe2, text: t('trustBar.items.2') },
    { icon: Clock3, text: t('trustBar.items.3') },
    { icon: WalletCards, text: t('trustBar.items.4') },
    { icon: Building2, text: t('trustBar.items.5') },
  ];

  return (
    <AnimatedSection className="border-b border-black/5 bg-surface-muted/70 py-6 dark:border-white/10" animation="up">
      <div className="container-shell grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        {items.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -6,
              scale: 1.04,
              boxShadow: '0 16px 48px rgba(45, 86, 63, 0.15), 0 4px 12px rgba(0,0,0,0.06)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            whileTap={{ scale: 0.97 }}
            className="group surface-card flex cursor-default items-center gap-3 p-4 transition-colors duration-300 hover:border-brand-300/40 hover:bg-brand-50/50 dark:hover:border-brand-700/30 dark:hover:bg-brand-900/10"
          >
            <motion.div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50/80 transition-colors duration-300 group-hover:bg-brand-100 dark:bg-white/5 dark:group-hover:bg-white/10"
              whileHover={{ rotate: [0, -12, 12, -6, 0] }}
              transition={{ duration: 0.6 }}
            >
              <item.icon className="h-[18px] w-[18px] text-brand-700 transition-transform duration-300 group-hover:scale-110 dark:text-brand-500" />
            </motion.div>
            <span className="text-sm font-medium text-ink-700 transition-colors duration-300 group-hover:text-brand-800 dark:text-ink-300 dark:group-hover:text-brand-400">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
