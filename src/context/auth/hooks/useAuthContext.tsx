import { useContext } from 'react';

import { AuthContext } from '../authContext/AuthContext';

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      'useAuthContext hook is not wrapped by AuthContextController provider or Context value is not provided',
    );
  }

  return ctx;
};
