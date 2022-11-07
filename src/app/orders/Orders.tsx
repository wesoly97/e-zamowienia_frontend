import { TableCell } from '@mui/material';

import { Container } from './Orders.styles';
import { OrdersProps } from './Orders.types';

import { Table } from '@/ui/table/Table';
import { Order } from '@/api/actions/orders/orders.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';

export const Orders = ({ data, count, hasNextPage, onNextPage, onPreviousPage, isLoading }: OrdersProps) => {
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
      />
    </Container>
  );
};
