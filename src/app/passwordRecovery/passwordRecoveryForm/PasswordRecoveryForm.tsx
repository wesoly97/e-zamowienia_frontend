import { FormProvider } from 'react-hook-form';

import { Form, StyledFormInput } from './PasswordRecoveryForm.styles';
import { PasswordRecoveryFormProps } from './PasswordRecoveryForm.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const PasswordRecoveryForm = ({ isSubmitting, onSubmit, form }: PasswordRecoveryFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <StyledFormInput id={'email'} name={'email'} type={'email'} label={'Email'} variant={'filled'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? '...' : 'Wyślij email'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
