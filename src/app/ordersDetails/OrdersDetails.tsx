import useMediaQuery from '@mui/material/useMediaQuery';

import { Box, Container, ColumnIdentifier, ColumnSpecification, Link } from './OrdersDetails.styles';
import { OrdersDetailsProps } from './OrdersDetails.types';

import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { formatDate } from '@/utils/date/formatDate';
import { formatPrice } from '@/utils/price/formatPrice';
import { theme } from '@/theme/theme';

export const OrdersDetails = ({ data }: OrdersDetailsProps) => {
  const { isAuthenticated } = useAuthContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getOrdererDetails = () => {
    if (isAuthenticated) {
      return (
        <>
          <h3>Telefon zamawiającego</h3>
          <p>{data.phoneNumber}</p>
          <h3>Adres email zamawiającego</h3>
          <p>{data.email}</p>
        </>
      );
    }
  };

  const getSpecifications = () => {
    return (
      <>
        <h3>Identyfikator</h3>
        <p>{data.procedureIdentifier}</p>
        <h3>Data publikacji</h3>
        <p>{formatDate(data.dateOfPublication, { isWithTime: true })}</p>
        <h3>Termin składania</h3>
        <p>{formatDate(data.expirationDate, { isWithTime: true })}</p>
        <h3>Kategoria</h3>
        <p>{data.category}</p>
        <h3>Typ</h3>
        <p>{data.mode}</p>
        <h3>Kwota</h3>
        <p>{formatPrice(data.price, { currency: 'PLN' })}</p>
        <h3>Nazwa zamawiającego</h3>
        <p>{data.customerName}</p>
        {getOrdererDetails()}
      </>
    );
  };

  return (
    <Container>
      <h2>Szczegóły postępowania</h2>
      <Box>
        <ColumnIdentifier>
          <h3>Tytuł</h3>
          <p>{data.title}</p>
          <h3>Opis</h3>
          <p>{data.description}</p>
          {isMobile && getSpecifications()}
          <h3>Załączniki</h3>
          <div>
            {data.files.map(({ key, fileName, url }) => {
              return (
                <p key={key}>
                  <Link href={url}>{fileName}</Link>
                </p>
              );
            })}
          </div>
        </ColumnIdentifier>
        <ColumnSpecification>{getSpecifications()}</ColumnSpecification>
      </Box>
    </Container>
  );
};
