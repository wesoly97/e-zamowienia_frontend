import { QueryKey, UseQueryOptions, useQuery as useTanstackQuery, UseQueryResult } from '@tanstack/react-query';
import { useMemo } from 'react';

import { useApiClient } from './../useApiClient/useApiClient';

export const useQuery = <TData = unknown, TError = unknown>(
  queryKey: QueryKey,
  options?: UseQueryOptions<TData, TError>,
): UseQueryResult<TData, TError> => {
  const { queryFn: clientQueryFn } = useApiClient();
  const queryFn = useMemo(() => clientQueryFn<TData>(), [clientQueryFn]);

  return useTanstackQuery<TData, TError, TData, QueryKey>(queryKey, queryFn, {
    ...options,
    refetchOnWindowFocus: false,
  });
};
