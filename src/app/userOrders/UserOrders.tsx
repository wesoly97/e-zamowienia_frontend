import EditIcon from '@mui/icons-material/Edit';

import { UserOrdersProps } from './UserOrders.types';

import { Table } from '@/ui/table/Table';
import { Order } from '@/api/actions/orders/orders.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const UserOrders = ({ data, count, hasNextPage, onNextPage, onPreviousPage, isLoading }: UserOrdersProps) => {
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
        { id: 'title', title: t('userOrders.table.headers.title') },
        { id: 'price', title: t('userOrders.table.headers.price') },
        { id: 'category', title: t('userOrders.table.headers.category') },
        { id: 'mode', title: t('userOrders.table.headers.mode') },
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
      actions={[
        {
          icon: <EditIcon />,
          tooltip: t('userOrders.table.actions.edit.tooltip'),
          onActionClick: (_, item) => {
            navigate(AppLinks.OrderEdit.replace(AppRoute.OrderId, item._id));
          },
        },
      ]}
    />
  );
};
