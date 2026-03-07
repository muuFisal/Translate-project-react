import { useEffect, useLayoutEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export function RouteScrollManager() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 260);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible ? (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fab-scroll fixed z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-card transition hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:bg-brand-600"
      aria-label={t('common.scrollTop')}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  ) : null;
}
