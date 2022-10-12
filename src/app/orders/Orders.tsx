import { TableCell } from '@mui/material';

import { Container } from './Orders.styles';
import { OrdersProps } from './Orders.types';

import { Table } from '@/ui/table/Table';
import { Order } from '@/api/actions/orders/orders.types';

export const Orders = ({ data }: OrdersProps) => {
  return (
    <Container>
      <Table
        rows={data}
        keyExtractor={({ _id }: Order) => _id}
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
