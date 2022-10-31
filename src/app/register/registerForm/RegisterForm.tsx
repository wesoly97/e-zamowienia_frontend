import { FormProvider } from 'react-hook-form';

import { Form } from './RegisterForm.styles';
import { RegisterFormProps } from './RegisterForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const RegisterForm = ({ isSubmitting, onSubmit, form }: RegisterFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'name'} name={'name'} label={'Imię'} />
        <FormInput id={'surname'} name={'surname'} label={'Nazwisko'} />
        <FormInput id={'email'} name={'email'} type={'email'} label={'Email'} />
        <FormInput id={'password'} name={'password'} type={'password'} label={'Hasło'} />
        <FormInput id={'repeat-password'} name={'repeatPassword'} type={'password'} label={'Powtórz hasło'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? '...' : 'Załóż konto'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
