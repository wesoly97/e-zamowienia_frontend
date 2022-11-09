import { AppLocale, TranslationFunction } from '@/i18n/i18n.types';

export type LocaleContextValue = {
  t: TranslationFunction;
  locale: AppLocale;
};
