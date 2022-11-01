import { useIsMutating } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { useChangePasswordEffect } from '../hooks/useChangePassword/useChangePasswordEffect';

import { UserProfileChangePasswordFormData } from './UserProfileChangePasswordForm.types';
import { userProfileChangePasswordFormInitialData } from './UserProfileChangePasswordForm.utils';
import { UserProfileChangePasswordForm } from './UserProfileChangePasswordForm';

import { passwordChangeQueryKey } from '@/api/actions/password/password';

export const UserProfileChangePasswordFormWrapper = () => {
  const form = useForm<UserProfileChangePasswordFormData>({
    defaultValues: userProfileChangePasswordFormInitialData,
  });

  const isLoading = !!useIsMutating({ mutationKey: [passwordChangeQueryKey] });

  const { mutate } = useChangePasswordEffect(form);

  const submit = (data: UserProfileChangePasswordFormData) => {
    mutate(data);
  };

  return <UserProfileChangePasswordForm isSubmitting={isLoading} onSubmit={submit} form={form} />;
};
