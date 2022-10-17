import { MutationFunction, QueryFunction } from '@tanstack/react-query';

import { QueryClientOptions } from '@/hooks/useQuery/useQuery.types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';
import {
  InfiniteQueryClientOptions,
  InfiniteQueryFn,
  UseInfiniteQueryOptions,
} from '@/hooks/useInfiniteQuery/useInfiniteQuery.types';

export type ApiClientContextValue = {
  queryFn: <TData>(options?: QueryClientOptions) => QueryFunction<TData>;
  mutationFn: <TParams, TData>(mutation: MutationFn<TParams, TData>) => MutationFunction<TData, TParams>;
  infiniteQueryFn: <TArgs, TParams, TResponse, TError>(
    query: InfiniteQueryFn<TArgs, TParams, TResponse>,
    useInfiniteQueryOptions?: UseInfiniteQueryOptions<TArgs, TParams, TError, TResponse>,
    clientOptions?: InfiniteQueryClientOptions,
  ) => QueryFunction<TParams>;
};
