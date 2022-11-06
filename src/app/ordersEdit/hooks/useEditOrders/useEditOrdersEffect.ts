import { UseFormReturn } from 'react-hook-form';

import { OrdersEditFormData } from '../../ordersEditForm/OrdersEditForm.types';

import { useEditOrders } from './useEditOrders';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useToastContext } from '@/context/toast/hooks/useToastContext';

export const useEditOrdersEffect = (orderId: string, form: UseFormReturn<OrdersEditFormData>) => {
  const { showToast } = useToastContext();

  return useEditOrders(orderId, {
    onSuccess: () => {
      showToast({ message: 'Prośba o edycję danych została wysłana do administratora' });
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
