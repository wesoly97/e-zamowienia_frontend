import { Container, Wrapper, Heading } from './OrdersEdit.styles';
import { OrdersEditFormWrapper } from './ordersEditForm/OrdersEditFormWrapper';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const OrdersEdit = () => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <Wrapper>
        <Heading>{t('orderEdit.title')}</Heading>
        <OrdersEditFormWrapper />
      </Wrapper>
    </Container>
  );
};
