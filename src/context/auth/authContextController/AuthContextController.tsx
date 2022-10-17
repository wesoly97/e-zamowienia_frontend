import { useMemo } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextValue } from '../authContext/AuthContext.types';
import { useGetAccount } from '../hooks/useGetAccount';

import { AuthContextControllerProps } from './AuthContextController.types';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const { data: session, isLoading: isLoadingAccount, isError: isAccountError } = useGetAccount({ retry: false });
  const isAuthenticated = !!session && !isLoadingAccount;
  const isUnauthenticated = isAccountError && !isLoadingAccount;

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      isLoadingAccount,
      isAccountError,
      isAuthenticated,
      isUnauthenticated,
    }),
    [session, isLoadingAccount, isAccountError, isAuthenticated, isUnauthenticated],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
