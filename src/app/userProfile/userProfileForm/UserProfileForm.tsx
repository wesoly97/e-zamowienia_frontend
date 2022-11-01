import { FormProvider } from 'react-hook-form';
import { useMemo } from 'react';

import { Form } from './UserProfileForm.styles';
import { UserProfileFormProps } from './UserProfileForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { RoleTypes } from '@/api/types/types';

export const UserProfileForm = ({ isSubmitting, onSubmit, form, userRole }: UserProfileFormProps) => {
  const verifiedUserFields = useMemo(() => {
    if (userRole && [RoleTypes.Administrator, RoleTypes.Orderer].includes(userRole))
      return (
        <>
          <FormInput id={'country'} name={'country'} label={'Kraj'} disabled />
          <FormInput id={'companyName'} name={'companyName'} label={'Firma'} disabled />
          <FormInput id={'nip'} name={'nip'} label={'NIP'} disabled />
        </>
      );
  }, [userRole]);

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'name'} name={'name'} label={'Imię'} />
        <FormInput id={'surname'} name={'surname'} label={'Nazwisko'} />
        <FormInput id={'email'} name={'email'} label={'Email'} disabled />
        {verifiedUserFields}
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? 'Zapisywanie' : 'Zatwierdź'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};