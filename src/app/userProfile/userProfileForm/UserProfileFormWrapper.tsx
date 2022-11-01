import { useIsMutating } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useUserProfileEffect } from '../hooks/useUserProfile/useUserProfileEffect';

import { UserProfileForm } from './UserProfileForm';
import { UserProfileFormData } from './UserProfileForm.types';
import { userProfileFormInitialData } from './UserProfileForm.utils';

import { editUserDataQueryKey } from '@/api/actions/userData/userData';

export const UserProfileFormWrapper = () => {
  const { data: userDetails } = userId || '';

  const form = useForm<UserProfileFormData>({
    defaultValues: userProfileFormInitialData,
  });

  useEffect(() => {
    if (!!userDetails) {
      form.reset(userDetails.orderDetailsValues);
    }
  }, [form, userDetails]);

  const isLoading = !!useIsMutating({ mutationKey: [editUserDataQueryKey] });

  const { mutate } = useUserProfileEffect(userId || '', form);

  const submit = (data: UserProfileFormData) => {
    mutate(data);
  };

  return <UserProfileForm isSubmitting={isLoading} onSubmit={submit} form={form} />;
};
