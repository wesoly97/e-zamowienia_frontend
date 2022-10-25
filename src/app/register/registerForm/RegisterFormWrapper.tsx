import { useForm } from 'react-hook-form';
import { useIsMutating } from '@tanstack/react-query';

import { useRegisterEffect } from '../hooks/useRegister/useRegisterEffect';

import { RegisterFormData } from './RegisterForm.types';
import { registerFormInitialData } from './RegisterForm.utlis';
import { RegisterForm } from './RegisterForm';

import { registerKey } from '@/api/actions/register/register';

export const RegisterFormWrapper = () => {
  const form = useForm<RegisterFormData>({
    defaultValues: registerFormInitialData,
  });

  const isLoading = !!useIsMutating({ mutationKey: [registerKey] });

  const { mutate } = useRegisterEffect(form);

  const submit = (data: RegisterFormData) => {
    mutate(data);
  };

  return <RegisterForm isSubmitting={isLoading} onSubmit={submit} form={form} />;
};
