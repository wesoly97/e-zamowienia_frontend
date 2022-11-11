import { FormProvider } from 'react-hook-form';

import { Form } from './UserProfileChangePasswordForm.styles';
import { UserProfileChangePasswordFormProps } from './UserProfileChangePasswordForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';
import { PrimaryLoader } from '@/theme/shared';

export const UserProfileChangePasswordForm = ({ isSubmitting, onSubmit, form }: UserProfileChangePasswordFormProps) => {
  const { t } = useLocaleContext();

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput
          id={'current-password'}
          name={'currentPassword'}
          type={'password'}
          label={t('profile.forms.changePassword.inputs.currentPassword')}
        />
        <FormInput
          id={'password'}
          name={'password'}
          type={'password'}
          label={t('profile.forms.changePassword.inputs.password')}
        />
        <FormInput
          id={'repeat-password'}
          name={'repeatPassword'}
          type={'password'}
          label={t('profile.forms.changePassword.inputs.repeatPassword')}
        />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('profile.forms.changePassword.submit')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
