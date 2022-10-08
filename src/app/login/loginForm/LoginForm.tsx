import { FormProvider, useForm } from 'react-hook-form';
import { useIsMutating } from '@tanstack/react-query';

import { useLoginEffect } from '../hooks/useLogin/useLoginEffect';

import { Form, StyledInput } from './LoginForm.styles';
import { LoginFormData } from './LoginForm.types';
import { loginFormInitialData } from './LoginForm.utils';

import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { loginKey } from '@/api/actions/authentication/authentication';

export const LoginForm = () => {
  const form = useForm<LoginFormData>({
    defaultValues: loginFormInitialData,
  });

  const isSubmitting = !!useIsMutating({ mutationKey: [loginKey] });

  const { mutate } = useLoginEffect(form);
  const submit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <FormProvider {...form}>
      <Form>
        <StyledInput label={'Email'} name={'email'} />
        <StyledInput label={'Hasło'} name={'password'} />
        <PrimaryButton disabled={isSubmitting} handleClick={form.handleSubmit(submit)}>
          {isSubmitting ? '...' : 'Logowanie'}
        </PrimaryButton>
      </Form>
    </FormProvider>
  );
};
