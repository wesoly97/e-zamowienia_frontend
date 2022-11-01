import { useIsMutating } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { useUserVerificationEffect } from '../hooks/useUserVerification/useUserVerificationEffect';

import { UserVerificationFormData } from './UserVerificationForm.types';
import { userVerificationFormInitialData } from './UserVerificationForm.utils';
import { UserVerificationForm } from './UserVerificationForm';

import { userVerificationQueryKey } from '@/api/actions/userVerification/userVerification';

export const UserVerificationFormWrapper = () => {
  const form = useForm<UserVerificationFormData>({
    defaultValues: userVerificationFormInitialData,
  });

  const isLoading = !!useIsMutating({ mutationKey: [userVerificationQueryKey] });

  const { mutate } = useUserVerificationEffect(form);

  const submit = (data: UserVerificationFormData) => {
    mutate(data);
  };

  return <UserVerificationForm isSubmitting={isLoading} onSubmit={submit} form={form} />;
};
