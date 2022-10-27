import { Order } from '@/api/actions/orders/orders.types';

export type OrdersProps = {
  data: Order[];
  count: number;
  hasNextPage?: boolean;
  onLoadMore: VoidFunction;
  onRefetch: VoidFunction;
};
