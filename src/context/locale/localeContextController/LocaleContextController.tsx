import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LocaleContext } from '../localeContext/LocaleContext';

import { LocaleContextControllerProps } from './LocaleContextController.types';

import { AppLocale } from '@/i18n/i18n.types';

export const LocaleContextController = ({ children }: LocaleContextControllerProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const value = useMemo(
    () => ({
      t,
      locale: language as AppLocale,
    }),
    [language, t],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};
