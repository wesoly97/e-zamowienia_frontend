import { useContext } from 'react';

import { PasswordRecoveryContext } from '../passwordRecoveryContext/PasswordRecoveryContext';

export const usePasswordRecoveryContext = () => {
  const ctx = useContext(PasswordRecoveryContext);

  if (!ctx) {
    throw new Error(
      'usePasswordRecoveryContext hook is not wrapped by PasswordRecoveryContextController provider or Context value is not provided',
    );
  }

  return ctx;
};
