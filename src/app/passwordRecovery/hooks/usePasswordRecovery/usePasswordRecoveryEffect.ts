import { UseFormReturn } from 'react-hook-form';

import { PasswordRecoveryFormData } from '../../passwordRecoveryForm/PasswordRecoveryForm.types';

import { usePasswordRecovery } from './usePasswordRecovery';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { usePasswordRecoveryContext } from '@/context/passwordRecovery/hooks/usePasswordRecoveryContext';

export const usePasswordRecoveryEffect = (form: UseFormReturn<PasswordRecoveryFormData>) => {
  const { setTokenExpirationDate } = usePasswordRecoveryContext();

  return usePasswordRecovery({
    onSuccess: () => {
      setTokenExpirationDate(new Date().getTime() + 60000);
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
        fieldToPick: 'email',
      });
    },
  });
};
