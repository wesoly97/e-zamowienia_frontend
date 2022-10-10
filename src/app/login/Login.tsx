import { Link } from 'react-router-dom';

import {
  Container,
  IconWrapper,
  FormWrapper,
  Header,
  StyledLoginIcon,
  StyledWaveIcon,
  FormBox,
  RegisterPrompt,
  StyledLink,
} from './Login.styles';
import { LoginForm } from './loginForm/LoginForm';

export const Login = () => {
  return (
    <Container>
      <IconWrapper>
        <StyledLoginIcon />
      </IconWrapper>
      <FormWrapper>
        <FormBox>
          <Header>Zaloguj się</Header>
          <LoginForm />
          <RegisterPrompt>
            Nie możesz się zalogować?<StyledLink to={'/'}>&nbsp;Zresetuj hasło</StyledLink>
          </RegisterPrompt>
        </FormBox>
      </FormWrapper>
      <StyledWaveIcon />
    </Container>
  );
};
