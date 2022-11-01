import { UseFormReturn } from 'react-hook-form';

import { PasswordRecoveryResetFormData } from '../../passwordRecoveryResetForm/PasswordRecoveryResetForm.types';

import { usePasswordRecoveryReset } from './usePasswordRecoveryReset';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const usePasswordRecoveryResetEffect = (form: UseFormReturn<PasswordRecoveryResetFormData>) => {
  return usePasswordRecoveryReset({
    onSuccess: () => {
      localStorage.removeItem('isTokenExpired');
      localStorage.removeItem('tokenExpirationDate');
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
        fieldToPick: 'password',
      });
    },
  });
};
