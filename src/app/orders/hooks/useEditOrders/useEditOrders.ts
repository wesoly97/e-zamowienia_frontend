import { AxiosError } from 'axios';
import { UseMutationOptions } from '@tanstack/react-query';

import { useMutation } from '@/hooks/useMutation/useMutation';
import { EditOrdersError, EditOrdersResponse } from '@/api/actions/orders/orders.types';
import { editOrdersMutationFn, editOrdersQueryKey } from '@/api/actions/orders/orders';

export const useEditOrders = (
  orderId: string,
  options?: UseMutationOptions<EditOrdersResponse, AxiosError<EditOrdersError>, FormData>,
) => {
  return useMutation([editOrdersQueryKey, orderId], editOrdersMutationFn(orderId), options);
};
