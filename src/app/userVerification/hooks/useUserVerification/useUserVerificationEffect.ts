import { UseFormReturn } from 'react-hook-form';

import { UserVerificationFormData } from '../../userVerificationForm/UserVerificationForm.types';

import { useUserVerification } from './useUserVerification';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useToastContext } from '@/context/toast/hooks/useToastContext';

export const useUserVerificationEffect = (form: UseFormReturn<UserVerificationFormData>) => {
  const { showToast } = useToastContext();

  return useUserVerification({
    onSuccess: () => {
      showToast({ message: 'Prośba o weryfikację użytkownika została wysłana do administratora' });
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
