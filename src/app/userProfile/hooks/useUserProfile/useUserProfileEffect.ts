import { UseFormReturn } from 'react-hook-form';

import { UserProfileFormData } from '../../userProfileForm/UserProfileForm.types';

import { useUserProfile } from './useUserProfile';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const useUserProfileEffect = (userId: string, form: UseFormReturn<UserProfileFormData>) => {
  return useUserProfile(userId, {
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
