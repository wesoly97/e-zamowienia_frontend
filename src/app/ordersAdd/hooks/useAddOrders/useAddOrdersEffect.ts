import { UseFormReturn } from 'react-hook-form';

import { OrdersAddFormData } from '../../ordersAddForm/OrdersAddForm.types';

import { useAddOrders } from './useAddOrders';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { AppLinks } from '@/routing/AppRoutes.types';

export const useAddOrdersEffect = (form: UseFormReturn<OrdersAddFormData>) => {
  const navigate = useNavigate();

  return useAddOrders({
    onSuccess: () => {
      navigate(AppLinks.Orders);
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
