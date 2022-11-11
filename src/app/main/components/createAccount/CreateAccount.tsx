import { Container, HeaderBox, Heading, IconBox, StyledSurfIcon } from './CreateAccount.styles';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const CreateAccount = () => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <HeaderBox>
        <Heading>{t('main.register')}</Heading>
      </HeaderBox>
      <IconBox>
        <StyledSurfIcon />
      </IconBox>
    </Container>
  );
};
