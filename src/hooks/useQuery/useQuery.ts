import { QueryKey, UseQueryOptions, useQuery as useTanstackQuery, UseQueryResult } from '@tanstack/react-query';
import { useMemo } from 'react';

import { useApiClient } from './../useApiClient/useApiClient';
import { QueryClientOptions } from './useQuery.types';

export const useQuery = <TData = unknown, TError = unknown>(
  queryKey: QueryKey,
  useQueryOptions?: UseQueryOptions<TData, TError>,
  clientOptions?: QueryClientOptions,
): UseQueryResult<TData, TError> => {
  const { queryFn: clientQueryFn } = useApiClient();
  const queryFn = useMemo(() => clientQueryFn<TData>(clientOptions), [clientOptions, clientQueryFn]);

  return useTanstackQuery<TData, TError, TData, QueryKey>(queryKey, queryFn, {
    ...useQueryOptions,
    refetchOnWindowFocus: false,
  });
};
