import { OrdersProps } from './Orders.types';

export const Orders = ({ data }: OrdersProps) => {
  return (
    <>
      {data.map((order) => (
        <h1 key={order._id}>{order.title}</h1>
      ))}
    </>
  );
};
