import { useForm } from 'react-hook-form';
import { useIsMutating } from '@tanstack/react-query';

import { useLoginEffect } from '../hooks/useLogin/useLoginEffect';

import { LoginForm } from './LoginForm';
import { loginFormInitialData } from './LoginForm.utils';
import { LoginFormData } from './LoginForm.types';

import { loginKey } from '@/api/actions/authentication/authentication';

export const LoginFormWrapper = () => {
  const form = useForm<LoginFormData>({
    defaultValues: loginFormInitialData,
  });

  const isLoading = !!useIsMutating({ mutationKey: [loginKey] });

  const { mutate } = useLoginEffect(form);

  const submit = (data: LoginFormData) => {
    mutate(data);
  };

  return <LoginForm isSubmitting={isLoading} onSubmit={submit} form={form} />;
};
