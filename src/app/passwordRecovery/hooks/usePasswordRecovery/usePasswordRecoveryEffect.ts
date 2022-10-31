import { UseFormReturn } from 'react-hook-form';

import { PasswordRecoveryFormData } from '../../passwordRecoveryForm/PasswordRecoveryForm.types';

import { usePasswordRecovery } from './usePasswordRecovery';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const usePasswordRecoveryEffect = (form: UseFormReturn<PasswordRecoveryFormData>) => {
  return usePasswordRecovery({
    onSuccess: () => {},
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
        fieldToPick: 'email',
      });
    },
  });
};
