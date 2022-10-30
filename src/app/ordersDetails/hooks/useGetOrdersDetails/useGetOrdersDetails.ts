import { UseQueryOptions } from '@tanstack/react-query';

import { getOrdersDetailsQueryKey } from '@/api/actions/orders/orders';
import { useQuery } from '@/hooks/useQuery/useQuery';
import { GetOrdersDetailsError, GetOrdersDetailsResponse } from '@/api/actions/orders/orders.types';
import { AppRoute } from '@/routing/AppRoutes.types';

export const useGetOrdersDetails = (
  orderId: string,
  options?: UseQueryOptions<GetOrdersDetailsResponse, GetOrdersDetailsError>,
) => {
  return useQuery<GetOrdersDetailsResponse, GetOrdersDetailsError>(
    [getOrdersDetailsQueryKey.replace(AppRoute.OrderId, orderId)],
    options,
  );
};
