import { Order } from '@/api/actions/orders/orders.types';

export type OrdersProps = {
  data: Order[];
  hasNextPage?: boolean;
  onLoadMore: VoidFunction;
  onRefetch: VoidFunction;
};
