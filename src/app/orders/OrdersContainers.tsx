import { useGetOrders } from './hooks/useGetOrders/useGetOrders';
import { Orders } from './Orders';

export const OrdersContainer = () => {
  const { data, isLoading } = useGetOrders();

  if (!data || isLoading) {
    return null;
  }

  return (
    <>
      <Orders data={data} />
    </>
  );
};
