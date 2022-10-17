import { useCallback, useMemo } from 'react';
import Axios, { AxiosRequestConfig } from 'axios';
import { MutationFunction, QueryFunction } from '@tanstack/react-query';
import { stringify } from 'qs';

import { InfiniteQueryFn, UseInfiniteQueryOptions } from '../useInfiniteQuery/useInfiniteQuery.types';
import { MutationFn } from '../useMutation/useMutation.types';

import { getAxiosConfig } from './axiosConfig/axiosConfig';
import { responseFailureInterceptor, responseSuccessInterceptor } from './interceptors/responseInterceptors';

import { InfiniteQueryClientOptions } from '@/hooks/useInfiniteQuery/useInfiniteQuery.types';
import { ApiClientContextValue } from '@/context/apiClient/apiClientContext/ApiClientContext.types';

export const useAxios = (): ApiClientContextValue => {
  const client = useMemo(() => {
    const axios = Axios.create(getAxiosConfig());

    axios.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

    return axios;
  }, []);

  const queryFn = useCallback(
    <TData>(): QueryFunction<TData> =>
      async ({ queryKey: [url] }) => {
        if (typeof url === 'string') {
          const { data } = await client.get<TData>(url);

          return data;
        }
        throw new Error('Invalid QueryKey');
      },
    [client],
  );

  const infiniteQueryFn = useCallback(
    <TArgs, TParams, TResponse, TError>(
        query: InfiniteQueryFn<TArgs, TParams, TResponse>,
        infiniteQueryOptions?: UseInfiniteQueryOptions<TArgs, TParams, TError, TResponse>,
        clientOptions?: InfiniteQueryClientOptions,
      ): QueryFunction<TParams> =>
      async ({ pageParam, signal }) => {
        const { endpoint, args } = query(infiniteQueryOptions?.args);

        const queryParams = stringify(
          {
            ...args,
            ...pageParam,
          },
          { arrayFormat: 'brackets' },
        );

        const { data } = await client.get<TParams>(`${endpoint}?${queryParams}`, {
          signal,
          timeout: clientOptions?.timeout,
        });

        return data;
      },
    [client],
  );

  const mutationFn = useCallback(
    <TParams = unknown, TData = unknown>(mutation: MutationFn<TParams, TData>): MutationFunction<TData, TParams> =>
      async (variables) => {
        const { endpoint, params, method, headers, timeout } = mutation(variables);

        const axiosConfig: AxiosRequestConfig = {
          url: `/${endpoint}`,
          data: params ? JSON.stringify(params) : undefined,
          method: method || 'POST',
          headers,
          timeout,
        };

        const { data } = await client.request(axiosConfig);

        return data;
      },
    [client],
  );

  return {
    queryFn,
    infiniteQueryFn,
    mutationFn,
  };
};
