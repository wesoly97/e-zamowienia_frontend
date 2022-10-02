import { Container, HeaderBox, Heading, StyledSurfIcon } from './CreateAccount.styles';

import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const CreateAccount = () => {
  return (
    <Container>
      <HeaderBox>
        <Heading>UTWÓRZ KONTO ABY W PEŁNI KORZYSTAĆ Z FUNKCJONALNOŚCI APLIKACJI</Heading>
        <PrimaryButton handleClick={() => {}}>Rejestracja</PrimaryButton>
      </HeaderBox>
      <StyledSurfIcon />
    </Container>
  );
};
