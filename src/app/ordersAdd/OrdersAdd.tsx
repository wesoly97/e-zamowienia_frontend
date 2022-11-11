import { Container, Wrapper, Heading } from './OrdersAdd.styles';
import { OrdersAddFormWrapper } from './ordersAddForm/OrdersAddFormWrapper';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const OrdersAdd = () => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <Wrapper>
        <Heading>{t('orderAdd.title')}</Heading>
        <OrdersAddFormWrapper />
      </Wrapper>
    </Container>
  );
};
