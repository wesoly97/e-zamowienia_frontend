import {
  Container,
  IconWrapper,
  FormWrapper,
  FormContainer,
  Header,
  StyledLoginIcon,
  StyledWaveIcon,
  FormBox,
  RegisterPrompt,
  StyledLink,
} from './Login.styles';
import { LoginFormWrapper } from './loginForm/LoginFormWrapper';

export const Login = () => {
  return (
    <Container>
      <IconWrapper>
        <StyledLoginIcon />
      </IconWrapper>
      <FormWrapper>
        <FormContainer>
          <FormBox>
            <Header>Zaloguj się</Header>
            <LoginFormWrapper />
            <RegisterPrompt>
              <span>Nie możesz się zalogować?</span>
              <StyledLink to={'/'}>&nbsp;Zresetuj hasło</StyledLink>
            </RegisterPrompt>
          </FormBox>
        </FormContainer>
      </FormWrapper>
      <StyledWaveIcon />
    </Container>
  );
};
