import { FormProvider } from 'react-hook-form';

import { Form } from './UserProfileChangePasswordForm.styles';
import { UserProfileChangePasswordFormProps } from './UserProfileChangePasswordForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const UserProfileChangePasswordForm = ({ isSubmitting, onSubmit, form }: UserProfileChangePasswordFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'current-password'} name={'currentPassword'} type={'password'} label={'Bieżące hasło'} />
        <FormInput id={'password'} name={'password'} type={'password'} label={'Nowe hasło'} />
        <FormInput id={'repeat-password'} name={'repeatPassword'} type={'password'} label={'Potwierdź nowe hasło'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? 'Zapisywanie' : 'Zatwierdź'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
