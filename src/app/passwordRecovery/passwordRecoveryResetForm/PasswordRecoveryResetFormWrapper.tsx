import { useIsMutating } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePasswordRecoveryResetEffect } from '../hooks/usePasswordRecoveryReset/usePasswordRecoveryResetEffect';

import { PasswordRecoveryResetForm } from './PasswordRecoveryResetForm';
import {
  PasswordRecoveryResetFormData,
  PasswordRecoveryResetFormWrapperProps,
} from './PasswordRecoveryResetForm.types';
import { passwordRecoveryResetFormInitialData } from './PasswordRecoveryResetForm.utils';

import { passwordResetQueryKey } from '@/api/actions/password/password';

export const PasswordRecoveryResetFormWrapper = ({ token }: PasswordRecoveryResetFormWrapperProps) => {
  const form = useForm<PasswordRecoveryResetFormData>({
    defaultValues: passwordRecoveryResetFormInitialData,
  });

  const isLoading = !!useIsMutating({ mutationKey: [passwordResetQueryKey] });

  const { mutate } = usePasswordRecoveryResetEffect(form);

  const submit = (data: PasswordRecoveryResetFormData) => {
    mutate({ ...data, token });
  };

  return <PasswordRecoveryResetForm isSubmitting={isLoading} onSubmit={submit} form={form} />;
};
