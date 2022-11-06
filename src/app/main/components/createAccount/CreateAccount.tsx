import { Container, HeaderBox, Heading, IconBox, StyledSurfIcon } from './CreateAccount.styles';

export const CreateAccount = () => {
  return (
    <Container>
      <HeaderBox>
        <Heading>Utwórz konto aby w pełni korzystać z funkcjonalności aplikacji</Heading>
      </HeaderBox>
      <IconBox>
        <StyledSurfIcon />
      </IconBox>
    </Container>
  );
};
