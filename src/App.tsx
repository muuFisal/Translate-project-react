import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { AboutPage } from '@/pages/AboutPage';
import { BlogDetailsPage } from '@/pages/BlogDetailsPage';
import { BlogPage } from '@/pages/BlogPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { LegalPage } from '@/pages/LegalPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PricingPage } from '@/pages/PricingPage';
import { ServicesPage } from '@/pages/ServicesPage';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
