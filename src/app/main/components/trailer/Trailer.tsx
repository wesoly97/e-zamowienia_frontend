import { Container, HeaderBox, IconBox, Heading, StyledSurfIcon } from './Trailer.styles';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const Trailer = () => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <IconBox>
        <StyledSurfIcon />
      </IconBox>
      <HeaderBox>
        <Heading>{t('main.trailer')}</Heading>
      </HeaderBox>
    </Container>
  );
};
