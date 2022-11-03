import { UseFormReturn } from 'react-hook-form';

import { UserVerificationFormData } from '../../userVerificationForm/UserVerificationForm.types';

import { useUserVerification } from './useUserVerification';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const useUserVerificationEffect = (form: UseFormReturn<UserVerificationFormData>) => {
  return useUserVerification({
    onSuccess: () => {},
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
