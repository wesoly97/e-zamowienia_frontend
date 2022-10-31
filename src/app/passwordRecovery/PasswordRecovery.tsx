import { Container, Wrapper } from './PasswordRecovery.styles';
import { PasswordRecoveryFormWrapper } from './passwordRecoveryForm/PasswordRecoveryFormWrapper';

export const PasswordRecovery = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Zresetuj hasło</h1>
        <p>Wpisz adres e-mail swojego konta, a my wyślemy Ci link do resetowania hasła.</p>
        <PasswordRecoveryFormWrapper />
      </Wrapper>
    </Container>
  );
};
