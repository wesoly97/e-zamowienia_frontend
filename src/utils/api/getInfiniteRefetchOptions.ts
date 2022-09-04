import { UseQueryOptions } from '@tanstack/react-query';

export const getInfiniteRefetchOptions = <TData, TError>(): Partial<UseQueryOptions<TData, TError>> => {
  return {
    retry: true,
    retryDelay: (attemptNumber) => Math.min(300 * attemptNumber, 30000),
  };
};
