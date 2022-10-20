import { useParams } from 'react-router';

import { useGetOrdersDetails } from '../hooks/useGetOrdersDetails/useGetOrdersDetails';

import { OrdersDetails } from './OrdersDetails';

export const OrdersDetailsContainer = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { data, isLoading } = useGetOrdersDetails(orderId || '', {
    retry: 3,
  });

  if (!data || isLoading) {
    return null;
  }

  return <OrdersDetails data={data} />;
};
