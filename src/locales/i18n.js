import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import thTranslation from './th/translation.json';
import enTranslation from './en/translation.json';

const resources = {
  th: {
    translation: thTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

const savedLanguage = localStorage.getItem('motix_lang') || 'th';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
