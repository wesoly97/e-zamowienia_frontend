import { UseFormReturn } from 'react-hook-form';

import { OrdersEditFormData } from '../../ordersEditForm/OrdersEditForm.types';

import { useEditOrders } from './useEditOrders';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useToastContext } from '@/context/toast/hooks/useToastContext';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const useEditOrdersEffect = (orderId: string, form: UseFormReturn<OrdersEditFormData>) => {
  const { showToast } = useToastContext();
  const { t } = useLocaleContext();

  return useEditOrders(orderId, {
    onSuccess: () => {
      showToast({ message: t('orderEdit.toast') });
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
