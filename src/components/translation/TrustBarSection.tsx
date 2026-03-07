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
        {items.map((item) => (
          <div key={item.text} className="surface-card flex items-center gap-3 p-4">
            <item.icon className="h-5 w-5 text-brand-700 dark:text-brand-500" />
            <span className="text-sm font-medium text-ink-700 dark:text-ink-300">{item.text}</span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
