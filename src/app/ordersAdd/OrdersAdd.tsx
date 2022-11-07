import { Container, Wrapper, Heading } from './OrdersAdd.styles';
import { OrdersAddFormWrapper } from './ordersAddForm/OrdersAddFormWrapper';

export const OrdersAdd = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Dodaj zamówienie</Heading>
        <OrdersAddFormWrapper />
      </Wrapper>
    </Container>
  );
};
