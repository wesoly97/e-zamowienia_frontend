import { FormProvider } from 'react-hook-form';

import { Form } from './UserProfileForm.styles';
import { UserProfileFormProps } from './UserProfileForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const UserProfileForm = ({ isSubmitting, onSubmit, form }: UserProfileFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'name'} name={'name'} label={'Imię'} />
        <FormInput id={'surname'} name={'surname'} label={'Nazwisko'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? 'Zapisywanie' : 'Zatwierdź'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
