import { UseFormReturn } from 'react-hook-form';

import { UserProfileChangePasswordFormData } from '../../userProfileChangePasswordForm/UserProfileChangePasswordForm.types';

import { useChangePassword } from './useChangePassword';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useToastContext } from '@/context/toast/hooks/useToastContext';

export const useChangePasswordEffect = (form: UseFormReturn<UserProfileChangePasswordFormData>) => {
  const { showToast } = useToastContext();

  return useChangePassword({
    onSuccess: () => {
      showToast({ message: 'Pomyślnie zaktualizowano hasło' });
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
        fieldToPick: 'currentPassword',
      });
    },
  });
};
