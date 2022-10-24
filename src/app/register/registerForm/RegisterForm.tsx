import { FormProvider } from 'react-hook-form';

import { Form } from './RegisterForm.styles';
import { RegisterFormProps } from './RegisterForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const RegisterForm = ({ isSubmitting, onSubmit, form }: RegisterFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
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
