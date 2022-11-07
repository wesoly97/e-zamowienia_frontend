import { PasswordRecoveryRaw } from './PasswordRecoveryRaw';

import { PasswordRecoveryContextController } from '@/context/passwordRecovery/passwordRecoveryContextController/PasswordRecoveryContextController';

export const PasswordRecoveryContainer = () => {
  return (
    <PasswordRecoveryContextController>
      <PasswordRecoveryRaw />
    </PasswordRecoveryContextController>
  );
};
