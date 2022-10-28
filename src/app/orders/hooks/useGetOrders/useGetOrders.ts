import { useGetOrdersFilters } from '../useGetOrdersFilters/useGetOrdersFilters';

import { getInfiniteOrdersQuery, getOrdersQueryKey } from '@/api/actions/orders/orders';
import { GetOrdersArgs, GetOrdersError, GetOrdersResponse } from '@/api/actions/orders/orders.types';
import { useInfiniteQuery } from '@/hooks/useInfiniteQuery/useInfiniteQuery';

export const useGetOrders = () => {
  const { limit, offset, filterOption, sortOption } = useGetOrdersFilters();

  return useInfiniteQuery<GetOrdersArgs, GetOrdersResponse, GetOrdersError>(
    [getOrdersQueryKey],
    getInfiniteOrdersQuery,
    {
      keepPreviousData: true,
      retry: 5,
      retryDelay: 1000,
      args: {
        limit,
        filterOption,
        sortOption,
      },
      getNextPageParam: ({ count }) => {
        const page = Number(offset) + 1;

        if (page * Number(limit) >= count) {
          return;
        }

        return page;
      },
      getPreviousPageParam: () => {
        const page = Number(offset) - 1;

        if (page < 0) {
          return;
        }

        return page;
      },
    },
  );
};
