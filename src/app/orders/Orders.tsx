import { MouseEvent } from 'react';
import { TableCell } from '@mui/material';

import { Container } from './Orders.styles';
import { OrdersProps } from './Orders.types';

import { Table } from '@/ui/table/Table';
import { Order } from '@/api/actions/orders/orders.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';

export const Orders = ({ data, count, hasNextPage, onLoadMore, onRefetch }: OrdersProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Table
        rows={data}
        count={count}
        keyExtractor={({ _id }: Order) => _id}
        onLoadMore={onLoadMore}
        hasNextPage={hasNextPage}
        onRefetch={onRefetch}
        onRowClick={(_, item) => {
          navigate(AppLinks.OrderDetails.replace(AppRoute.OrderId, item._id));
        }}
        renderRow={({ title, price, mode }: Order) => (
          <>
            <TableCell>{title}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{mode}</TableCell>
          </>
        )}
      />
    </Container>
  );
};
