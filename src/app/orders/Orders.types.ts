import { Order } from '@/api/actions/orders/orders.types';

export type OrdersProps = {
  data: Order[];
  count: number;
  hasNextPage?: boolean;
  onNextPage: VoidFunction;
  onPreviousPage: VoidFunction;
  onRefetch: VoidFunction;
  isLoading: boolean;
};
