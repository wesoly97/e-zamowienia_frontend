import Cookie from 'js-cookie';

import { localeCookie } from './i18n.constans';
import { AppLocale, CookieLocale } from './i18n.types';

export const getAppLocaleByCookie: Record<CookieLocale, AppLocale> = {
  [CookieLocale.Pl]: AppLocale.Pl,
  [CookieLocale.En]: AppLocale.En,
};

export const defaultLocale: AppLocale =
  getAppLocaleByCookie[Cookie.get(localeCookie.name) as CookieLocale] ??
  (import.meta.env.VITE_DEFAULT_LOCALE || AppLocale.Pl);
