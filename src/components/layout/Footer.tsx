import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/site';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-black/5 bg-surface-muted/50 py-10 dark:border-white/10">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h3 className="font-display text-3xl font-semibold text-ink-900">{siteConfig.brand.name}</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink-500">{t('footer.description')}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-500">{t('footer.links')}</h4>
          <div className="mt-4 grid gap-3 text-sm text-ink-500">
            <NavLink to="/services">{t('nav.services')}</NavLink>
            <NavLink to="/pricing">{t('nav.pricing')}</NavLink>
            <NavLink to="/blog">{t('nav.blog')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/terms">{t('nav.terms')}</NavLink>
            <NavLink to="/privacy">{t('nav.privacy')}</NavLink>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-500">{t('footer.contact')}</h4>
          <div className="mt-4 grid gap-3 text-sm text-ink-500">
            <p>{siteConfig.brand.email}</p>
            <p>{siteConfig.brand.phone}</p>
            <p>{siteConfig.brand.locations.join(' / ')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
