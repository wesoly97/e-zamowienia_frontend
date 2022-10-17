import { GetOrdersArgs, GetOrdersResponse } from './orders.types';

import { InfiniteQueryFn } from '@/hooks/useInfiniteQuery/useInfiniteQuery.types';

export const getOrdersQueryKey = 'orders';

export const getInfiniteOrdersQuery: InfiniteQueryFn<GetOrdersArgs, GetOrdersResponse> = (args) => {
  return {
    endpoint: getOrdersQueryKey,
    args,
  };
};
