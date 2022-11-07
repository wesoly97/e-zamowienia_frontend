import {
  Container,
  IconWrapper,
  FormWrapper,
  FormContainer,
  Heading,
  StyledLoginIcon,
  StyledWaveIcon,
  FormBox,
  RegisterPrompt,
  StyledLink,
} from './Login.styles';
import { LoginFormWrapper } from './loginForm/LoginFormWrapper';

import { AppLinks } from '@/routing/AppRoutes.types';

export const Login = () => {
  return (
    <Container>
      <IconWrapper>
        <StyledLoginIcon />
      </IconWrapper>
      <FormWrapper>
        <FormContainer>
          <FormBox>
            <Heading>Zaloguj się</Heading>
            <LoginFormWrapper />
            <RegisterPrompt>
              <span>Nie możesz się zalogować?</span>
              <StyledLink to={AppLinks.PasswordRecovery}>&nbsp;Zresetuj hasło</StyledLink>
            </RegisterPrompt>
          </FormBox>
        </FormContainer>
      </FormWrapper>
      <StyledWaveIcon />
    </Container>
  );
};
