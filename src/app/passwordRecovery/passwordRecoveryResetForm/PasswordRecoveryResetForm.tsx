import { FormProvider } from 'react-hook-form';

import { Form, StyledFormInput } from './PasswordRecoveryResetForm.styles';
import { PasswordRecoveryResetFormProps } from './PasswordRecoveryResetForm.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const PasswordRecoveryResetForm = ({ isSubmitting, onSubmit, form }: PasswordRecoveryResetFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <StyledFormInput id={'password'} name={'password'} type={'password'} label={'Nowe hasło'} />
        <StyledFormInput id={'repeat-password'} name={'repeatPassword'} type={'password'} label={'Powtórz hasło'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? 'Zatwierdzanie...' : 'Potwierdź'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
