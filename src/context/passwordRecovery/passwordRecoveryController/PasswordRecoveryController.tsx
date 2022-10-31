import { useMemo, useState } from 'react';

import { PasswordRecoveryContext } from '../passwordRecoveryContext/passwordRecoveryContext';
import { PasswordRecoveryContextValue } from '../passwordRecoveryContext/passwordRecoveryContext.types';

import { PasswordRecoveryControllerProps } from './passwordRecoveryController.types';

export const PasswordRecoveryController = ({ children }: PasswordRecoveryControllerProps) => {
  const [emailSent, setEmailSent] = useState(false);

  const value = useMemo<PasswordRecoveryContextValue>(
    () => ({
      emailSent,
      setEmailSent,
    }),
    [emailSent, setEmailSent],
  );

  return <PasswordRecoveryContext.Provider value={value}>{children}</PasswordRecoveryContext.Provider>;
};
