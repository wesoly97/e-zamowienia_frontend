import { Container, FormWrapper, Heading, SubHeading, IconWrapper, StyledRegisterIcon } from './Register.styles';
import { RegisterFormWrapper } from './registerForm/RegisterFormWrapper';

export const Register = () => {
  return (
    <Container>
      <IconWrapper>
        <StyledRegisterIcon />
      </IconWrapper>
      <FormWrapper>
        <Heading>Załóż konto</Heading>
        <SubHeading>To proste i bezpieczne</SubHeading>
        <RegisterFormWrapper />
      </FormWrapper>
    </Container>
  );
};
