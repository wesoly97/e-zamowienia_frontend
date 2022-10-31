import { useContext } from 'react';

import { PasswordRecoveryContext } from '../passwordRecoveryContext/passwordRecoveryContext';

export const usePasswordRecoveryContext = () => {
  const ctx = useContext(PasswordRecoveryContext);

  if (!ctx) {
    throw new Error(
      'usePasswordRecoveryContext hook is not wrapped by PasswordRecoveryContext provider or Context value is not provided',
    );
  }

  return ctx;
};
