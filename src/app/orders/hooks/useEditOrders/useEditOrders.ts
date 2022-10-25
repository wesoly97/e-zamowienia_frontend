import { AxiosError } from 'axios';
import { UseMutationOptions } from '@tanstack/react-query';

import { useMutation } from '@/hooks/useMutation/useMutation';
import { EditOrdersError, EditOrdersResponse } from '@/api/actions/orders/orders.types';
import { editOrdersMutationFn, editOrdersQueryKey } from '@/api/actions/orders/orders';
import { AppRoute } from '@/routing/AppRoutes.types';

export const useEditOrders = (
  orderId: string,
  options?: UseMutationOptions<EditOrdersResponse, AxiosError<EditOrdersError>, FormData>,
) => {
  return useMutation([editOrdersQueryKey.replace(AppRoute.OrderId, orderId)], editOrdersMutationFn, options);
};
