import { Container, FormWrapper, Header, SubHeader, IconWrapper, StyledRegisterIcon } from './Register.styles';
import { RegisterForm } from './registerForm/RegisterForm';

export const Register = () => {
  return (
    <Container>
      <IconWrapper>
        <StyledRegisterIcon />
      </IconWrapper>
      <FormWrapper>
        <Header>Załóż konto</Header>
        <SubHeader>To proste i bezpieczne</SubHeader>
        <RegisterForm />
      </FormWrapper>
    </Container>
  );
};
