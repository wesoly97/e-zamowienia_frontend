import { useIsMutating } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useUserProfileEffect } from '../hooks/useUserProfile/useUserProfileEffect';
import { useGetUserDetails } from '../hooks/useGetUserDetails/useGetUserDetails';

import { UserProfileForm } from './UserProfileForm';
import { UserProfileFormData } from './UserProfileForm.types';
import { userProfileFormInitialData } from './UserProfileForm.utils';

import { editUserDataQueryKey } from '@/api/actions/userData/userData';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';

export const UserProfileFormWrapper = () => {
  const { session } = useAuthContext();

  const { data: userDetails, isLoading } = useGetUserDetails(session?._id || '');

  const form = useForm<UserProfileFormData>({
    defaultValues: userProfileFormInitialData,
  });

  useEffect(() => {
    if (!!userDetails) {
      form.reset(userDetails);
    }
  }, [form, userDetails]);

  const isSubmitting = !!useIsMutating({ mutationKey: [editUserDataQueryKey] });

  const { mutate } = useUserProfileEffect(session?._id || '', form);

  const submit = (data: UserProfileFormData) => {
    const { name, surname } = data;
    mutate({ name, surname });
  };

  if (!userDetails || isLoading) {
    return null;
  }

  return <UserProfileForm isSubmitting={isSubmitting} onSubmit={submit} form={form} userRole={session?.accountType} />;
};
