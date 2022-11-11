import { UseFormReturn } from 'react-hook-form';

import { UserVerificationFormData } from '../../userVerificationForm/UserVerificationForm.types';

import { useUserVerification } from './useUserVerification';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useToastContext } from '@/context/toast/hooks/useToastContext';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const useUserVerificationEffect = (form: UseFormReturn<UserVerificationFormData>) => {
  const { showToast } = useToastContext();
  const { t } = useLocaleContext();

  return useUserVerification({
    onSuccess: () => {
      showToast({ message: t('userVerification.toast') });
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
