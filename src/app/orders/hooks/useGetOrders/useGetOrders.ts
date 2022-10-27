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
      keepPreviousData: false,
      retry: 5,
      retryDelay: 1000,
      args: {
        limit: limit,
      },
      onSuccess: () => {},
      onError: () => {},
      getNextPageParam: ({ count }) => {
        const page = offset + 1;

        if (page * limit >= count) {
          return;
        }

        return offset + 1;
      },
    },
  );
};
