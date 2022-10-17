import { QueryKey, useInfiniteQuery as useTanstackInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
import { useMemo } from 'react';

import { useApiClient } from '../useApiClient/useApiClient';

import { InfiniteQueryClientOptions, InfiniteQueryFn, UseInfiniteQueryOptions } from './useInfiniteQuery.types';

/**
 * Fetching data using this hook doesn't require specifying query function like it's required in react-query
 * @see https://react-query.tanstack.com/guides/query-functions
 * This hook uses proper querying strategy provided via ApiClientContext
 * @see ApiClientContextController.ts
 * */
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
