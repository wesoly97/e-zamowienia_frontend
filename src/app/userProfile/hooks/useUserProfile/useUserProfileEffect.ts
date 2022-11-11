import { UseFormReturn } from 'react-hook-form';

import { UserProfileFormData } from '../../userProfileForm/UserProfileForm.types';

import { useUserProfile } from './useUserProfile';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useToastContext } from '@/context/toast/hooks/useToastContext';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const useUserProfileEffect = (userId: string, form: UseFormReturn<UserProfileFormData>) => {
  const { showToast } = useToastContext();
  const { t } = useLocaleContext();

  return useUserProfile(userId, {
    onSuccess: () => {
      showToast({ message: t('profile.forms.userDetails.toast') });
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
