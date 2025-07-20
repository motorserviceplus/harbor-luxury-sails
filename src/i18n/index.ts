import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';
import zhTWTranslations from './locales/zh-TW.json';

const resources = {
  en: {
    translation: enTranslations
  },
  zh: {
    translation: zhTranslations
  },
  'zh-TW': {
    translation: zhTWTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;