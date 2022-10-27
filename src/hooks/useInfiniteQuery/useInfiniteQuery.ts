import { QueryKey, useInfiniteQuery as useTanstackInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
import { useMemo } from 'react';

import { useApiClient } from '../useApiClient/useApiClient';

import { InfiniteQueryClientOptions, InfiniteQueryFn, UseInfiniteQueryOptions } from './useInfiniteQuery.types';

export const useInfiniteQuery = <TArgs = unknown, TParams = unknown, TError = unknown, TResponse = TParams>(
  queryKey: QueryKey,
  query: InfiniteQueryFn<TArgs, TParams, TResponse>,
  useInfiniteQueryOptions?: UseInfiniteQueryOptions<TArgs, TParams, TError, TResponse>,
  clientOptions?: InfiniteQueryClientOptions,
): UseInfiniteQueryResult<TResponse, TError> => {
  const { infiniteQueryFn: clientInfiniteQueryFn } = useApiClient();

  const infiniteQueryFn = useMemo(() => {
    return clientInfiniteQueryFn<TArgs, TParams, TResponse, TError>(query, useInfiniteQueryOptions, clientOptions);
  }, [clientInfiniteQueryFn, clientOptions, query, useInfiniteQueryOptions]);

  return useTanstackInfiniteQuery<TParams, TError, TResponse, QueryKey>(queryKey, infiniteQueryFn, {
    ...useInfiniteQueryOptions,
    refetchOnWindowFocus: false,
  });
};
