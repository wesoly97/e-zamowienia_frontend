import { useEffect, useMemo } from 'react';

import { PasswordRecoveryContext } from '../passwordRecoveryContext/PasswordRecoveryContext';
import { PasswordRecoveryContextValue } from '../passwordRecoveryContext/PasswordRecoveryContext.types';

import { PasswordRecoveryContextControllerProps } from './PasswordRecoveryContextController.types';

import { useLocalStorage } from '@/hooks/useLocalStorage/useLocalStorage';

export const PasswordRecoveryContextController = ({ children }: PasswordRecoveryContextControllerProps) => {
  const [tokenExpirationDate, setTokenExpirationDate] = useLocalStorage('tokenExpirationDate', 0);

  const value = useMemo<PasswordRecoveryContextValue>(
    () => ({
      tokenExpirationDate,
      setTokenExpirationDate,
    }),
    [tokenExpirationDate, setTokenExpirationDate],
  );

  return <PasswordRecoveryContext.Provider value={value}>{children}</PasswordRecoveryContext.Provider>;
};
