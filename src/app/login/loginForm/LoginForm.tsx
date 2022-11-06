import { FormProvider } from 'react-hook-form';

import { Form, StyledCircularProgress } from './LoginForm.styles';
import { LoginFormProps } from './LoginForm.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { FormInput } from '@/ui/formInput/FormInput';

export const LoginForm = ({ isSubmitting, onSubmit, form }: LoginFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'email'} name={'email'} type={'email'} label={'Email'} />
        <FormInput id={'password'} name={'password'} type={'password'} label={'Hasło'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <StyledCircularProgress /> : 'Zaloguj'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
