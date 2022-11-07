import EditIcon from '@mui/icons-material/Edit';

import { UserOrdersProps } from './UserOrders.types';
import { Container } from './UserOrders.styles';

import { Table } from '@/ui/table/Table';
import { Order } from '@/api/actions/orders/orders.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';

export const UserOrders = ({ data, count, hasNextPage, onNextPage, onPreviousPage, isLoading }: UserOrdersProps) => {
  const navigate = useNavigate();

  if (!data) {
    //TODO placeholder empty
    return null;
  }

  if (isLoading) {
    //TODO loader
  }

  return (
    <Container>
      <Table
        rows={data}
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
            tooltip: 'Edytuj zamówienie',
            onActionClick: (_, item) => {
              navigate(AppLinks.OrderEdit.replace(AppRoute.OrderId, item._id));
            },
          },
        ]}
      />
    </Container>
  );
};
