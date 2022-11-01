import { Container, Wrapper } from './PasswordRecovery.styles';
import { PasswordRecovery } from './PasswordRecovery';

import { PasswordRecoveryContextController } from '@/context/passwordRecovery/passwordRecoveryContextController/PasswordRecoveryContextController';

export const PasswordRecoveryContainer = () => {
  return (
    <PasswordRecoveryContextController>
      <Container>
        <Wrapper>
          <PasswordRecovery />
        </Wrapper>
      </Container>
    </PasswordRecoveryContextController>
  );
};
