import { Container, Icon, FormWrapper, Header, StyledLoginIcon, StyledWaveIcon } from './Login.styles';
import { LoginForm } from './loginForm/LoginForm';

export const Login = () => {
  return (
    <Container>
      <Icon>
        <StyledLoginIcon />
      </Icon>
      <FormWrapper>
        <Header>Zaloguj się</Header>
        <LoginForm />
      </FormWrapper>
      <StyledWaveIcon />
    </Container>
  );
};
