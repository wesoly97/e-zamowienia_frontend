import { UseFormReturn } from 'react-hook-form';

import { UserProfileChangePasswordFormData } from '../../userProfileChangePasswordForm/UserProfileChangePasswordForm.types';

import { useChangePassword } from './useChangePassword';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useToastContext } from '@/context/toast/hooks/useToastContext';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const useChangePasswordEffect = (form: UseFormReturn<UserProfileChangePasswordFormData>) => {
  const { showToast } = useToastContext();
  const { t } = useLocaleContext();

  return useChangePassword({
    onSuccess: () => {
      showToast({ message: t('profile.forms.changePassword.toast') });
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
