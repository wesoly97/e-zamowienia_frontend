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
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const OrdersDetails = ({ data }: OrdersDetailsProps) => {
  const { isAuthenticated } = useAuthContext();
  const { t } = useLocaleContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getOrdererDetails = () => {
    if (isAuthenticated) {
      return (
        <>
          <SubHeading>{t('orderDescription.sections.phone')}</SubHeading>
          <p>{data.phoneNumber}</p>
          <SubHeading>{t('orderDescription.sections.email')}</SubHeading>
          <p>{data.email}</p>
        </>
      );
    }
  };

  const getSpecifications = () => {
    return (
      <>
        <SubHeading>{t('orderDescription.sections.procedureIdentifier')}</SubHeading>
        <p>{data.procedureIdentifier}</p>
        <SubHeading>{t('orderDescription.sections.dateOfPublication')}</SubHeading>
        <p>{formatDate(data.dateOfPublication, { isWithTime: true })}</p>
        <SubHeading>{t('orderDescription.sections.expirationDate')}</SubHeading>
        <p>{formatDate(data.expirationDate, { isWithTime: true })}</p>
        <SubHeading>{t('orderDescription.sections.category')}</SubHeading>
        <p>{data.category}</p>
        <SubHeading>{t('orderDescription.sections.mode')}</SubHeading>
        <p>{data.mode}</p>
        <SubHeading>{t('orderDescription.sections.price')}</SubHeading>
        <p>{formatPrice(data.price, { currency: 'PLN' })}</p>
        <SubHeading>{t('orderDescription.sections.customer')}</SubHeading>
        <p>{data.customerName}</p>
        <SubHeading>{t('orderDescription.sections.country')}</SubHeading>
        <p>{data.country}</p>
        {getOrdererDetails()}
      </>
    );
  };

  return (
    <Container>
      <Heading>{t('orderDescription.title')}</Heading>
      <Box>
        <ColumnIdentifier>
          <SubHeading>{t('orderDescription.sections.title')}</SubHeading>
          <p>{data.title}</p>
          <SubHeading>{t('orderDescription.sections.description')}</SubHeading>
          <p>{data.description}</p>
          {isMobile && getSpecifications()}
          <SubHeading>{t('orderDescription.sections.attachments')}</SubHeading>
          <div>
            {data.files.map(({ key, fileName, url }) => (
              <p key={key}>
                <Link href={url}>{fileName}</Link>
              </p>
            ))}
          </div>
        </ColumnIdentifier>
        <ColumnSpecification>{getSpecifications()}</ColumnSpecification>
      </Box>
    </Container>
  );
};
