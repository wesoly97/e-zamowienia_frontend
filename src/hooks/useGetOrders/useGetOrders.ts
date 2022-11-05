import { useGetOrdersParams } from '../useGetOrdersParams/useGetOrdersParams';

import { getInfiniteOrdersQuery, getOrdersQueryKey } from '@/api/actions/orders/orders';
import { GetOrdersArgs, GetOrdersError, GetOrdersResponse } from '@/api/actions/orders/orders.types';
import { useInfiniteQuery } from '@/hooks/useInfiniteQuery/useInfiniteQuery';

export const useGetOrders = (userId?: string) => {
  const {
    filters: { limit, offset, filter_title, filter_category, filter_mode },
    sort,
  } = useGetOrdersParams();

  return useInfiniteQuery<GetOrdersArgs, GetOrdersResponse, GetOrdersError>(
    [getOrdersQueryKey],
    getInfiniteOrdersQuery,
    {
      keepPreviousData: true,
      retry: 5,
      retryDelay: 1000,
      args: {
        limit,
        filterOption: {
          title: filter_title,
          mode: filter_mode,
          category: filter_category,
          ownerId: userId,
        },
        sortOption: {
          ...sort,
        },
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
