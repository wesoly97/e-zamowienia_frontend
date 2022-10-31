import { UseFormReturn } from 'react-hook-form';

import { PasswordRecoveryFormData } from '../../passwordRecoveryForm/PasswordRecoveryForm.types';

import { usePasswordRecovery } from './usePasswordRecovery';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { usePasswordRecoveryContext } from '@/context/passwordRecovery/hooks/usePasswordRecoveryContext';

export const usePasswordRecoveryEffect = (form: UseFormReturn<PasswordRecoveryFormData>) => {
  const { setEmailSent } = usePasswordRecoveryContext();

  return usePasswordRecovery({
    onSuccess: () => {
      setEmailSent(true);
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
