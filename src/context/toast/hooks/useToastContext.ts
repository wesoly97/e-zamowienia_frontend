import { useContext } from 'react';

import { ToastContext } from '../toastContext/ToastContext';

export const useToastContext = () => {
  const ctx = useContext(ToastContext);

  if (!ctx) {
    throw new Error(
      'useToastContext hook is not wrapped by ToastContextController provider or Context value is not provided',
    );
  }

  return ctx;
};
