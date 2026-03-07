import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/ui/Seo';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('seo.notFound.title')} description={t('seo.notFound.description')} path="/404" />
      <section className="section-space">
        <div className="container-shell max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-500">404</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-ink-900 dark:text-white">{t('notFound.title')}</h1>
          <p className="mt-4 text-base leading-8 text-ink-500">{t('notFound.description')}</p>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800">
            {t('notFound.cta')}
          </Link>
        </div>
      </section>
    </>
  );
}
