import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!menuRef.current) return;
      const target = event.target as Node;
      if (!menuRef.current.contains(target)) setOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        (isScrolled || open)
          ? 'border-b border-black/5 bg-surface-base/90 shadow-soft backdrop-blur-xl dark:border-white/10'
          : 'bg-surface-base/60 backdrop-blur-md'
      )}
    >
      <div ref={menuRef} className="relative">
        <div className="container-shell flex h-20 items-center justify-between gap-4">
          <NavLink to="/" className="font-display text-3xl font-semibold text-ink-900">
            {siteConfig.brand.shortName} <span className="text-brand-700 dark:text-brand-500">Translate</span>
          </NavLink>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn('text-sm font-medium text-ink-500 transition hover:text-ink-900', isActive && 'text-brand-700 dark:text-brand-500')}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={toggleLanguage} className="rounded-full border border-black/5 px-4 py-2 text-sm font-medium dark:border-white/10">
              {i18n.language === 'ar' ? 'EN' : 'AR'}
            </button>
            <button onClick={toggleTheme} className="rounded-full border border-black/5 p-2.5 dark:border-white/10">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href={`https://wa.me/${siteConfig.brand.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-brand-800">
              {t('common.whatsapp')}
            </a>
          </div>

          <button className="rounded-full border border-black/5 p-2.5 lg:hidden dark:border-white/10" onClick={() => setOpen((value) => !value)} aria-label={t('nav.toggleMenu')}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className={cn('overflow-hidden border-t border-black/5 transition-all duration-300 lg:hidden dark:border-white/10', open ? 'max-h-[32rem]' : 'max-h-0')}>
          <div className="container-shell grid gap-4 py-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => cn('text-base font-medium text-ink-500', isActive && 'text-brand-700 dark:text-brand-500')}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <button onClick={toggleLanguage} className="rounded-full border border-black/5 px-4 py-2 text-sm font-medium dark:border-white/10">
                {i18n.language === 'ar' ? 'EN' : 'AR'}
              </button>
              <button onClick={toggleTheme} className="rounded-full border border-black/5 p-2.5 dark:border-white/10">
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <a href={`https://wa.me/${siteConfig.brand.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white">
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
