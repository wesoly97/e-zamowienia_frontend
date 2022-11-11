import { OrdersProps } from './Orders.types';

import { Table } from '@/ui/table/Table';
import { Order } from '@/api/actions/orders/orders.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const Orders = ({ data, count, hasNextPage, onNextPage, onPreviousPage, isLoading }: OrdersProps) => {
  const navigate = useNavigate();
  const { t } = useLocaleContext();

  if (!data) {
    //TODO placeholder empty
    return null;
  }

  if (isLoading) {
    //TODO loader
  }

  return (
    <Table
      rows={data}
      headers={[
        { id: 'title', title: t('orders.table.headers.title') },
        { id: 'price', title: t('orders.table.headers.price') },
        { id: 'category', title: t('orders.table.headers.category') },
        { id: 'mode', title: t('orders.table.headers.mode') },
      ]}
      count={count}
      keyExtractor={({ _id }: Order) => _id}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      hasNextPage={hasNextPage}
      onRowClick={(_, item) => {
        navigate(AppLinks.OrderDetails.replace(AppRoute.OrderId, item._id));
      }}
      renderRow={({ title, price, category, mode }: Order) => Object.values({ title, price, category, mode })}
    />
  );
};
