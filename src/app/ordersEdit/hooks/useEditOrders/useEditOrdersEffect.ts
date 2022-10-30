import { UseFormReturn } from 'react-hook-form';

import { OrdersEditFormData } from '../../ordersEditForm/OrdersEditForm.types';

import { useEditOrders } from './useEditOrders';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const useEditOrdersEffect = (orderId: string, form: UseFormReturn<OrdersEditFormData>) => {
  return useEditOrders(orderId, {
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
