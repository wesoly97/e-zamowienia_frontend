import { ReactNode, useMemo } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextValue } from '../authContext/AuthContext.types';
import { useGetAccount } from '../hooks/useGetAccount';

export const AuthContextController = ({ children }: { children: ReactNode }) => {
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
