import { useEffect, useMemo } from 'react';

import { PasswordRecoveryContext } from '../passwordRecoveryContext/PasswordRecoveryContext';
import { PasswordRecoveryContextValue } from '../passwordRecoveryContext/PasswordRecoveryContext.types';

import { PasswordRecoveryContextControllerProps } from './PasswordRecoveryContextController.types';

import { useLocalStorage } from '@/hooks/useLocalStorage/useLocalStorage';

export const PasswordRecoveryContextController = ({ children }: PasswordRecoveryContextControllerProps) => {
  const [isTokenExpired, setIsTokenExpired] = useLocalStorage('isTokenExpired', true);
  const [tokenExpirationDate, setTokenExpirationDate] = useLocalStorage('tokenExpirationDate', new Date().getTime());

  useEffect(() => {
    if (tokenExpirationDate < new Date().getTime()) {
      setIsTokenExpired(true);
    }
  }, []);

  const value = useMemo<PasswordRecoveryContextValue>(
    () => ({
      isTokenExpired,
      setIsTokenExpired,
      setTokenExpirationDate,
    }),
    [isTokenExpired, setIsTokenExpired, setTokenExpirationDate],
  );

  return <PasswordRecoveryContext.Provider value={value}>{children}</PasswordRecoveryContext.Provider>;
};
