import { FormProvider } from 'react-hook-form';

import { Form } from './UserVerificationForm.styles';
import { UserVerificationFormProps } from './UserVerificationForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { FormPhoneInput } from '@/ui/formPhoneInput/FormPhoneInput';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';
import { PrimaryLoader } from '@/theme/shared';

export const UserVerificationForm = ({ isSubmitting, onSubmit, form }: UserVerificationFormProps) => {
  const { t } = useLocaleContext();

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormPhoneInput id={'phone-number'} name={'phoneNumber'} label={t('userVerification.inputs.phone')} />
        <FormInput id={'country'} name={'country'} label={t('userVerification.inputs.country')} />
        <FormInput id={'company-name'} name={'companyName'} label={t('userVerification.inputs.company')} />
        <FormInput id={'nip'} name={'nip'} label={t('userVerification.inputs.nip')} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('userVerification.submit')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
