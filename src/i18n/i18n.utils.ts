import Cookie from 'js-cookie';

import { localeCookie } from './i18n.constans';
import { isAppLocale } from './i18n.typeguards';
import { AppLocale } from './i18n.types';

export const getDefaultLocale = () => {
  if (isAppLocale(Cookie.get(localeCookie.name) as AppLocale)) {
    return Cookie.get(localeCookie.name) as AppLocale;
  }

  if (import.meta.env.VITE_DEFAULT_LOCALE) {
    return import.meta.env.VITE_DEFAULT_LOCALE as AppLocale;
  }

  return AppLocale.Pl;
};
