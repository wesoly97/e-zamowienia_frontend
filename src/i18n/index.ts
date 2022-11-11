import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pl from './data/pl.json';
import en from './data/en.json';
import { defaultLocale } from './i18n.utils';

i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: pl,
    },
    en: {
      translation: en,
    },
  },
  lng: defaultLocale,
  fallbackLng: defaultLocale,
});
