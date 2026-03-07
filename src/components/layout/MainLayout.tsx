import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { AiSupportChat } from '@/components/AiSupportChat';
import { RouteScrollManager } from '@/components/RouteScrollManager';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { DeveloperCredit } from './DeveloperCredit';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <RouteScrollManager />
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <DeveloperCredit />
      <AiSupportChat />
      <WhatsAppButton label={t('common.whatsapp')} />
    </div>
  );
}
