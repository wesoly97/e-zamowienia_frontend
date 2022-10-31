import { FormProvider } from 'react-hook-form';

import { Form } from './LoginForm.styles';
import { LoginFormProps } from './LoginForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const LoginForm = ({ isSubmitting, onSubmit, form }: LoginFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'email'} name={'email'} type={'email'} label={'Email'} />
        <FormInput id={'password'} name={'password'} type={'password'} label={'Hasło'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? '...' : 'Logowanie'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
