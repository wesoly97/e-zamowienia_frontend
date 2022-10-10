import { useIsMutating } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

import { useRegisterEffect } from '../hooks/useRegister/useRegisterEffect';

import { RegisterFormData } from './RegisterForm.types';
import { registerFormInitialData } from './RegisterForm.utlis';
import { Form, StyledInput } from './RegisterForm.styles';

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
    <FormProvider {...form}>
      <Form>
        <StyledInput label={'Imię'} name={'name'} />
        <StyledInput label={'Nazwisko'} name={'surname'} />
        <StyledInput label={'Email'} name={'email'} />
        <StyledInput label={'Hasło'} name={'password'} />
        <StyledInput label={'Powtórz hasło'} name={'repeatPassword'} />
        <PrimaryButton disabled={isSubmitting} handleClick={form.handleSubmit(submit)}>
          {isSubmitting ? '...' : 'Załóż konto'}
        </PrimaryButton>
      </Form>
    </FormProvider>
  );
};
