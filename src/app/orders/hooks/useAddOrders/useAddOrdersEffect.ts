import { UseFormReturn } from 'react-hook-form';

import { OrdersAddFormData } from '../../ordersAdd/ordersAddForm/OrdersAddForm.types';

import { useAddOrders } from './useAddOrders';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const useAddOrdersEffect = (form: UseFormReturn<OrdersAddFormData>) => {
  return useAddOrders({
    onSuccess: () => {},
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
