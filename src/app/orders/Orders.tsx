import { TableCell } from '@mui/material';

import { Container } from './Orders.styles';
import { OrdersProps } from './Orders.types';

import { Table } from '@/ui/table/Table';
import { Order } from '@/api/actions/orders/orders.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';

export const Orders = ({ data, hasNextPage, onLoadMore, onRefetch }: OrdersProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Table
        rows={data}
        keyExtractor={({ _id }: Order) => _id}
        onLoadMore={onLoadMore}
        hasNextPage={hasNextPage}
        onRefetch={onRefetch}
        onRowClick={() => navigate('')}
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
