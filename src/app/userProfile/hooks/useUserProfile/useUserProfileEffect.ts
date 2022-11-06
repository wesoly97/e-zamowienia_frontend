import { UseFormReturn } from 'react-hook-form';

import { UserProfileFormData } from '../../userProfileForm/UserProfileForm.types';

import { useUserProfile } from './useUserProfile';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useToastContext } from '@/context/toast/hooks/useToastContext';

export const useUserProfileEffect = (userId: string, form: UseFormReturn<UserProfileFormData>) => {
  const { showToast } = useToastContext();

  return useUserProfile(userId, {
    onSuccess: () => {
      showToast({ message: 'Pomyślnie zaktualizowano dane' });
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
