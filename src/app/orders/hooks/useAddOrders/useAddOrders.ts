import { AxiosError } from 'axios';
import { UseMutationOptions } from '@tanstack/react-query';

import { AddOrdersResponse, AddOrdersError } from '@/api/actions/orders/orders.types';
import { useMutation } from '@/hooks/useMutation/useMutation';
import { addOrdersMutationFn, addOrdersQueryKey } from '@/api/actions/orders/orders';

export const useAddOrders = (options?: UseMutationOptions<AddOrdersResponse, AxiosError<AddOrdersError>, FormData>) => {
  return useMutation([addOrdersQueryKey], addOrdersMutationFn, options);
};
