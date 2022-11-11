import { useContext } from 'react';

import { LocaleContext } from '../localeContext/LocaleContext';

export const useLocaleContext = () => {
  const ctx = useContext(LocaleContext);

  if (!ctx) {
    throw new Error(
      'useLocaleContext hook is not wrapped by LocaleContextController provider or Context value is not provided',
    );
  }

  return ctx;
};
