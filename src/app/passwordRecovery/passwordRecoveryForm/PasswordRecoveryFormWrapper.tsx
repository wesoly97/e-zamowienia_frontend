import { useForm } from 'react-hook-form';
import { useIsMutating } from '@tanstack/react-query';

import { usePasswordRecoveryEffect } from '../hooks/usePasswordRecovery/usePasswordRecoveryEffect';

import { passwordRecoveryFormInitialData } from './PasswordRecovery.utlis';
import { PasswordRecoveryForm } from './PasswordRecoveryForm';
import { PasswordRecoveryFormData } from './PasswordRecoveryForm.types';

import { passwordRecoveryQueryKey } from '@/api/actions/passwordRecovery/passwordRecovery';

export const PasswordRecoveryFormWrapper = () => {
  const form = useForm<PasswordRecoveryFormData>({
    defaultValues: passwordRecoveryFormInitialData,
  });

  const isLoading = !!useIsMutating({ mutationKey: [passwordRecoveryQueryKey] });

  const { mutate } = usePasswordRecoveryEffect(form);

  const submit = (data: PasswordRecoveryFormData) => {
    mutate(data);
  };

  return <PasswordRecoveryForm isSubmitting={isLoading} onSubmit={submit} form={form} />;
};
