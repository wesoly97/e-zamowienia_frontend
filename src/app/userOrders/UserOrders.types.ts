import { Order } from '@/api/actions/orders/orders.types';

export type UserOrdersProps = {
  data: Order[];
  count: number;
  hasNextPage?: boolean;
  onNextPage: VoidFunction;
  onPreviousPage: VoidFunction;
  isLoading: boolean;
};
