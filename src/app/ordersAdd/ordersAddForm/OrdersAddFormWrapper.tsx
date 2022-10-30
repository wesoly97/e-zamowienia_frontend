import { useIsMutating } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { useAddOrdersEffect } from '../hooks/useAddOrders/useAddOrdersEffect';

import { OrdersAddFormData } from './OrdersAddForm.types';
import { ordersAddFormInitialData } from './OrdersAddForm.utils';
import { OrdersAddForm } from './OrdersAddForm';

import { addOrdersQueryKey } from '@/api/actions/orders/orders';
import { formatFormData } from '@/utils/api/formData/formatFormData';

export const OrdersAddFormWrapper = () => {
  const form = useForm<OrdersAddFormData>({
    defaultValues: ordersAddFormInitialData,
  });

  const isLoading = !!useIsMutating({ mutationKey: [addOrdersQueryKey] });

  const { mutateAsync } = useAddOrdersEffect(form);

  const submit = async (data: OrdersAddFormData) => {
    mutateAsync(formatFormData(data));
  };

  return <OrdersAddForm isSubmitting={isLoading} onSubmit={submit} form={form} />;
};
