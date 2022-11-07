import { Container, Wrapper, Heading } from './OrdersEdit.styles';
import { OrdersEditFormWrapper } from './ordersEditForm/OrdersEditFormWrapper';

export const OrdersEdit = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Edytuj zamówienie</Heading>
        <OrdersEditFormWrapper />
      </Wrapper>
    </Container>
  );
};
