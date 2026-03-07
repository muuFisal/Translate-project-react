import { GalleryHeroSection } from '@/components/gallery/GalleryHeroSection';
import { GalleryGridSection } from '@/components/gallery/GalleryGridSection';
import { GalleryCtaSection } from '@/components/gallery/GalleryCtaSection';
import { Seo } from '@/components/ui/Seo';
import { useTranslation } from 'react-i18next';

export function GalleryPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <>
      <Seo title={t('seo.gallery.title')} description={t('seo.gallery.description')} path="/gallery" />
      <GalleryHeroSection />
      <GalleryGridSection locale={locale} />
      <GalleryCtaSection />
    </>
  );
}
