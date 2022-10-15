import { useIsMutating } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

import { useRegisterEffect } from '../hooks/useRegister/useRegisterEffect';

import { RegisterFormData } from './RegisterForm.types';
import { registerFormInitialData } from './RegisterForm.utlis';
import { Form } from './RegisterForm.styles';

import { FormInput } from '@/ui/formInput/FormInput';
import { registerKey } from '@/api/actions/register/register';
import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    defaultValues: registerFormInitialData,
  });

  const isSubmitting = !!useIsMutating({ mutationKey: [registerKey] });

  const { mutate } = useRegisterEffect(form);
  const submit = (data: RegisterFormData) => {
    mutate(data);
  };

  return (
    <Form onSubmit={form.handleSubmit(submit)}>
      <FormProvider {...form}>
        <FormInput label={'Imię'} name={'name'} />
        <FormInput label={'Nazwisko'} name={'surname'} />
        <FormInput label={'Email'} name={'email'} type={'email'} />
        <FormInput label={'Hasło'} name={'password'} type={'password'} />
        <FormInput label={'Powtórz hasło'} name={'repeatPassword'} type={'password'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? '...' : 'Załóż konto'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
