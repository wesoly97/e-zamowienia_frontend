import { useMemo } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextValue } from '../authContext/AuthContext.types';
import { useGetAccount } from '../hooks/useGetAccount';

import { AuthContextControllerProps } from './AuthContextController.types';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const { data, isLoading: isLoadingAccount, isError: isAccountError } = useGetAccount({ retry: false });
  const isUnauthenticated = isAccountError && !isLoadingAccount;
  const session = isUnauthenticated ? undefined : data;
  const isAuthenticated = !!session && !isLoadingAccount;

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
