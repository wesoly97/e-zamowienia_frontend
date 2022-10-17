import { useParams } from 'react-router';

export const OrdersDetailsContainer = () => {
  const { orderId } = useParams<{ orderId: string }>();

  return <>{orderId}</>;
};
