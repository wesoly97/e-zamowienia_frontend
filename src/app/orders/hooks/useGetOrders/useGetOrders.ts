import { UseQueryOptions } from '@tanstack/react-query';

import { getOrdersQueryKey } from '@/api/actions/orders/orders';
import { GetOrdersError, GetOrdersResponse } from '@/api/actions/orders/orders.types';
import { useQuery } from '@/hooks/useQuery/useQuery';
import { getInfiniteRefetchOptions } from '@/utils/api/getInfiniteRefetchOptions';

export const useGetOrders = (options?: UseQueryOptions<GetOrdersResponse, GetOrdersError>) => {
  return useQuery<GetOrdersResponse, GetOrdersError>([getOrdersQueryKey], {
    ...getInfiniteRefetchOptions(),
    ...options,
  });
};
