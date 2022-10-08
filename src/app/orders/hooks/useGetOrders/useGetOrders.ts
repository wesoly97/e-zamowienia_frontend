import { UseQueryOptions } from '@tanstack/react-query';

import { useQuery } from '@/hooks/useQuery/useQuery';
import { GetOrdersError, GetOrdersResponse } from '@/api/actions/orders/orders.types';
import { getOrdersQueryKey } from '@/api/actions/orders/orders';
import { getInfiniteRefetchOptions } from '@/utils/api/getInfiniteRefetchOptions';

export const useGetOrders = (options?: UseQueryOptions<GetOrdersResponse, GetOrdersError>) => {
  return useQuery<GetOrdersResponse, GetOrdersError>([getOrdersQueryKey], {
    ...getInfiniteRefetchOptions(),
    ...options,
  });
};
