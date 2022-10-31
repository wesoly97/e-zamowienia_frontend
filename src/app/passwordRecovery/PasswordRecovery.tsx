import { Container, SentMessage, StyledEmailSentIcon, Wrapper } from './PasswordRecovery.styles';
import { PasswordRecoveryFormWrapper } from './passwordRecoveryForm/PasswordRecoveryFormWrapper';

import { PasswordRecoveryController } from '@/context/passwordRecovery/passwordRecoveryController/passwordRecoveryController';
import { usePasswordRecoveryContext } from '@/context/passwordRecovery/hooks/usePasswordRecoveryContext';

const PasswordRecoveryRaw = () => {
  const { emailSent } = usePasswordRecoveryContext();

  if (emailSent) {
    return (
      <Container>
        <Wrapper>
          <StyledEmailSentIcon />
          <SentMessage>Link został wysłany na podany email.</SentMessage>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <h1>Zresetuj hasło</h1>
        <p>Wpisz adres email swojego konta, a my wyślemy Ci link do resetowania hasła.</p>
        <PasswordRecoveryFormWrapper />
      </Wrapper>
    </Container>
  );
};

export const PasswordRecovery = () => {
  return (
    <PasswordRecoveryController>
      <PasswordRecoveryRaw />
    </PasswordRecoveryController>
  );
};
