import { UseFormReturn } from 'react-hook-form';

import { UserProfileChangePasswordFormData } from '../../userProfileChangePasswordForm/UserProfileChangePasswordForm.types';

import { useChangePassword } from './useChangePassword';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const useChangePasswordEffect = (form: UseFormReturn<UserProfileChangePasswordFormData>) => {
  return useChangePassword({
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
        fieldToPick: 'currentPassword',
      });
    },
  });
};
