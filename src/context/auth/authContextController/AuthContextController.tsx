import { ReactNode, useMemo } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextValue } from '../authContext/AuthContext.types';
import { useGetAccount } from '../hooks/useGetAccount';

export const AuthContextController = ({ children }: { children: ReactNode }) => {
  const { data: session, isLoading: isLoadingAccount, isError: isErrorAccount } = useGetAccount({ retry: false });

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      isLoadingAccount,
      isErrorAccount,
    }),
    [session, isErrorAccount, isLoadingAccount],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
