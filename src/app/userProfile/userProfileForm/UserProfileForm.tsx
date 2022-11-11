import { FormProvider } from 'react-hook-form';
import { useMemo } from 'react';

import { Form } from './UserProfileForm.styles';
import { UserProfileFormProps } from './UserProfileForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { isUserVerified } from '@/utils/accountTypes';
import { FormPhoneInput } from '@/ui/formPhoneInput/FormPhoneInput';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';
import { PrimaryLoader } from '@/theme/shared';

export const UserProfileForm = ({ isSubmitting, onSubmit, form, userRole }: UserProfileFormProps) => {
  const { t } = useLocaleContext();

  const verifiedUserFields = useMemo(() => {
    if (isUserVerified(userRole))
      return (
        <>
          <FormPhoneInput
            id={'phone-number'}
            name={'phoneNumber'}
            label={t('profile.forms.userDetails.inputs.phone')}
            disabled
          />
          <FormInput id={'country'} name={'country'} label={t('profile.forms.userDetails.inputs.country')} disabled />
          <FormInput
            id={'company-name'}
            name={'companyName'}
            label={t('profile.forms.userDetails.inputs.company')}
            disabled
          />
          <FormInput id={'nip'} name={'nip'} label={t('profile.forms.userDetails.inputs.nip')} disabled />
        </>
      );
  }, [userRole]);

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'name'} name={'name'} label={t('profile.forms.userDetails.inputs.name')} />
        <FormInput id={'surname'} name={'surname'} label={t('profile.forms.userDetails.inputs.surname')} />
        <FormInput
          id={'email'}
          name={'email'}
          type={'email'}
          label={t('profile.forms.userDetails.inputs.email')}
          disabled
        />
        {verifiedUserFields}
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('profile.forms.userDetails.submit')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
