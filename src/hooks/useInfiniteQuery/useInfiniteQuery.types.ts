import { QueryKey, UseInfiniteQueryOptions as UseTanstackInfiniteQueryOptions } from '@tanstack/react-query';

export type InfiniteQuery<TArgs> = {
  endpoint: string;
  args?: TArgs;
};
/**
 * TResponse is being used in order to properly infer type in useMutation from function returning mutation parameters
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type InfiniteQueryFn<TArgs = unknown, TParams = unknown, TResponse = TParams> = (
  args?: TArgs,
) => InfiniteQuery<TArgs>;

export type UseInfiniteQueryConfigParameters<TArgs = unknown> = {
  args?: TArgs;
};

export type UseInfiniteQueryOptions<
  TArgs = unknown,
  TParams = unknown,
  TError = unknown,
  TData = TParams,
  TQueryKey extends QueryKey = QueryKey,
> = UseInfiniteQueryConfigParameters<TArgs> &
  Omit<UseTanstackInfiniteQueryOptions<TParams, TError, TData, TParams, TQueryKey>, 'queryKey' | 'queryFn'>;

export type InfiniteQueryClientOptions = {
  timeout?: number;
};
