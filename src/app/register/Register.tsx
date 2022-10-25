import { Container, FormWrapper, Header, SubHeader, IconWrapper, StyledRegisterIcon } from './Register.styles';
import { RegisterFormWrapper } from './registerForm/RegisterFormWrapper';

export const Register = () => {
  return (
    <Container>
      <IconWrapper>
        <StyledRegisterIcon />
      </IconWrapper>
      <FormWrapper>
        <Header>Załóż konto</Header>
        <SubHeader>To proste i bezpieczne</SubHeader>
        <RegisterFormWrapper />
      </FormWrapper>
    </Container>
  );
};
