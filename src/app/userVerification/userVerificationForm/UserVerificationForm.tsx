import { FormProvider } from 'react-hook-form';

import { Form } from './UserVerificationForm.styles';
import { UserVerificationFormProps } from './UserVerificationForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const UserVerificationForm = ({ isSubmitting, onSubmit, form }: UserVerificationFormProps) => {
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'phone-number'} name={'phoneNumber'} type={'tel'} label={'Numer telefonu'} />
        <FormInput id={'country'} name={'country'} label={'Kraj'} />
        <FormInput id={'company-name'} name={'companyName'} label={'Firma'} />
        <FormInput id={'nip'} name={'nip'} label={'NIP'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? 'Wysyłanie' : 'Wyślij prośbę'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
