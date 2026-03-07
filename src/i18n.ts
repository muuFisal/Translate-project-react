import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storageKey = 'khaleej-translate-lang';
const storedLang = typeof window !== 'undefined' ? window.localStorage.getItem(storageKey) : null;
const initialLng = storedLang === 'ar' ? 'ar' : 'en';

async function loadLocale(lng: 'en' | 'ar') {
  const response = await fetch(`/locales/${lng}/common.json`);
  if (!response.ok) throw new Error(`Failed to load locale: ${lng}`);
  return response.json();
}

export async function initI18n() {
  if (i18n.isInitialized) return i18n;

  const [en, ar] = await Promise.all([loadLocale('en'), loadLocale('ar')]);

  await i18n.use(initReactI18next).init({
    lng: initialLng,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    interpolation: { escapeValue: false },
  });

  i18n.on('languageChanged', (lng) => {
    window.localStorage.setItem(storageKey, lng);
  });

  return i18n;
}

export default i18n;
