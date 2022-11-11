import { AppLocale } from './i18n.types';

export const isAppLocale = (locale?: AppLocale): locale is AppLocale =>
  !!locale && Object.values(AppLocale).includes(locale);
