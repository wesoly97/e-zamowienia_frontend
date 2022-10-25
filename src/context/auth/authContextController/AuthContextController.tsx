import { useMemo } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextValue } from '../authContext/AuthContext.types';
import { useGetAccount } from '../hooks/useGetAccount';

import { AuthContextControllerProps } from './AuthContextController.types';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const { data, isLoading: isLoadingAccount, isError: isAccountError } = useGetAccount({ retry: false });

  const value = useMemo<AuthContextValue>(
    () => ({
      session: data,
      isLoadingAccount,
      isAccountError,
      isAuthenticated: !!data && !isAccountError,
      isUnauthenticated: isAccountError,
    }),
    [isAccountError, isLoadingAccount, data],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
