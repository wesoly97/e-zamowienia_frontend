import { Container, IconWrapper, FormWrapper, Header, StyledLoginIcon, StyledWaveIcon } from './Login.styles';
import { LoginForm } from './loginForm/LoginForm';

export const Login = () => {
  return (
    <Container>
      <IconWrapper>
        <StyledLoginIcon />
      </IconWrapper>
      <FormWrapper>
        <Header>Zaloguj się</Header>
        <LoginForm />
      </FormWrapper>
      <StyledWaveIcon />
    </Container>
  );
};
