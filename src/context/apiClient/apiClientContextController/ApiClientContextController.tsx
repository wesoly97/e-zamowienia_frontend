import React, { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useKyStrategy } from 'hooks/useKyStrategy/useKyStrategy';

import { ApiClientContext } from 'context/apiClient/apiClientContext/ApiClientContext';
import { ApiClientContextValue } from 'context/apiClient/apiClientContext/ApiClientContext.types';
/** example of usage of another strategy **/
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { ApiClientControllerProps } from './ApiClientContextController.types';

import { useAxios } from '@/hooks/useAxios/useAxios';

export const ApiClientContextController = ({ children }: ApiClientControllerProps) => {
  const { queryFn, mutationFn, infiniteQueryFn } = useAxios();
  /** example of usage of different strategy **/
  // const { queryFn, mutationFn, infiniteQueryFn } = useKyStrategy();

  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          queryFn: queryFn(),
        },
      },
    });
  }, [queryFn]);

  const ctxValue: ApiClientContextValue = useMemo(
    () => ({
      queryFn,
      mutationFn,
      infiniteQueryFn,
    }),
    [queryFn, mutationFn, infiniteQueryFn],
  );

  return (
    <ApiClientContext.Provider value={ctxValue}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};
