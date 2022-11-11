import { Container, FormWrapper, Heading, SubHeading, IconWrapper, StyledRegisterIcon } from './Register.styles';
import { RegisterFormWrapper } from './registerForm/RegisterFormWrapper';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const Register = () => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <IconWrapper>
        <StyledRegisterIcon />
      </IconWrapper>
      <FormWrapper>
        <Heading>{t('register.title')}</Heading>
        <SubHeading>{t('register.subtitle')}</SubHeading>
        <RegisterFormWrapper />
      </FormWrapper>
    </Container>
  );
};
