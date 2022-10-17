import { getInfiniteOrdersQuery, getOrdersQueryKey } from '@/api/actions/orders/orders';
import { GetOrdersArgs, GetOrdersError, GetOrdersResponse } from '@/api/actions/orders/orders.types';
import { useFiltersParams } from '@/context/filtersParams/hooks/useFiltersParams';
import { useInfiniteQuery } from '@/hooks/useInfiniteQuery/useInfiniteQuery';

export const useGetOrders = () => {
  const { limit, offset } = useFiltersParams();

  return useInfiniteQuery<GetOrdersArgs, GetOrdersResponse, GetOrdersError>(
    [getOrdersQueryKey],
    getInfiniteOrdersQuery,
    {
      keepPreviousData: true,
      retry: 5,
      retryDelay: 1000,
      args: {
        limit: limit,
        offset: offset,
      },
      onSuccess: () => {},
      onError: () => {},
      getNextPageParam: ({ count }) => {
        return count <= limit * (offset + 1);
      },
    },
  );
};
