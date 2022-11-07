import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Box,
  Heading,
  SubHeading,
  Container,
  ColumnIdentifier,
  ColumnSpecification,
  Link,
} from './OrdersDetails.styles';
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
          <SubHeading>Telefon zamawiającego</SubHeading>
          <p>{data.phoneNumber}</p>
          <SubHeading>Adres email zamawiającego</SubHeading>
          <p>{data.email}</p>
        </>
      );
    }
  };

  const getSpecifications = () => {
    return (
      <>
        <SubHeading>Identyfikator</SubHeading>
        <p>{data.procedureIdentifier}</p>
        <SubHeading>Data publikacji</SubHeading>
        <p>{formatDate(data.dateOfPublication, { isWithTime: true })}</p>
        <SubHeading>Termin składania</SubHeading>
        <p>{formatDate(data.expirationDate, { isWithTime: true })}</p>
        <SubHeading>Kategoria</SubHeading>
        <p>{data.category}</p>
        <SubHeading>Typ</SubHeading>
        <p>{data.mode}</p>
        <SubHeading>Kwota</SubHeading>
        <p>{formatPrice(data.price, { currency: 'PLN' })}</p>
        <SubHeading>Zamawiający</SubHeading>
        <p>{data.customerName}</p>
        <SubHeading>Państwo zamawiającego</SubHeading>
        <p>{data.country}</p>
        {getOrdererDetails()}
      </>
    );
  };

  return (
    <Container>
      <Heading>Szczegóły postępowania</Heading>
      <Box>
        <ColumnIdentifier>
          <SubHeading>Tytuł</SubHeading>
          <p>{data.title}</p>
          <SubHeading>Opis</SubHeading>
          <p>{data.description}</p>
          {isMobile && getSpecifications()}
          <SubHeading>Załączniki</SubHeading>
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
