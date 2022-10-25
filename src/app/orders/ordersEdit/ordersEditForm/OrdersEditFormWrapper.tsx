import { useIsMutating } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useEffect, useMemo } from 'react';

import { useEditOrdersEffect } from '../../hooks/useEditOrders/useEditOrdersEffect';
import { useGetOrdersDetails } from '../../hooks/useGetOrdersDetails/useGetOrdersDetails';

import { OrdersEditFormData } from './OrdersEditForm.types';
import { OrdersEditForm } from './OrdersEditForm';
import { ordersEditFormInitialData } from './OrdersEditForm.styles.utils';

import { formatFormData } from '@/utils/api/formData/formatFormData';
import { editOrdersQueryKey } from '@/api/actions/orders/orders';
import { parseDateToString } from '@/utils/date/parseDateToString';

export const OrdersEditFormWrapper = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const { data: orderDetails } = useGetOrdersDetails(orderId || '', {
    retry: 3,
  });

  const form = useForm<OrdersEditFormData>({
    defaultValues: ordersEditFormInitialData,
  });

  const orderDetailsValues = useMemo(() => {
    if (!!orderDetails) {
      const { files, ...rest } = orderDetails;
      //todo files type conversion
      return { ...rest, expirationDate: parseDateToString(rest.expirationDate) };
    }
  }, [orderDetails]);

  useEffect(() => {
    form.reset(orderDetailsValues);
  }, [form, orderDetailsValues]);

  const isLoading = !!useIsMutating({ mutationKey: [editOrdersQueryKey] });

  const { mutateAsync } = useEditOrdersEffect(orderId || '', form);

  const submit = async (data: OrdersEditFormData) => {
    mutateAsync(formatFormData(data));
  };

  return (
    <OrdersEditForm
      isSubmitting={isLoading}
      onSubmit={submit}
      form={form}
      minExpirationDate={orderDetailsValues?.expirationDate}
    />
  );
};
