import { FormProvider } from 'react-hook-form';

import { Form, StyledFormInput } from './PasswordRecoveryForm.styles';
import { PasswordRecoveryFormProps } from './PasswordRecoveryForm.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { PrimaryLoader } from '@/theme/shared';

export const PasswordRecoveryForm = ({ isSubmitting, onSubmit, form }: PasswordRecoveryFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <StyledFormInput id={'email'} name={'email'} type={'email'} label={'Email'} variant={'filled'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : 'Wyślij email'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
