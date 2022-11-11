import { FormProvider } from 'react-hook-form';

import { Form, StyledFormInput } from './PasswordRecoveryResetForm.styles';
import { PasswordRecoveryResetFormProps } from './PasswordRecoveryResetForm.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { PrimaryLoader } from '@/theme/shared';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const PasswordRecoveryResetForm = ({ isSubmitting, onSubmit, form }: PasswordRecoveryResetFormProps) => {
  const { t } = useLocaleContext();

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <StyledFormInput
          id={'password'}
          name={'password'}
          type={'password'}
          label={t('passwordRecovery.passwordSubmissionForm.inputs.password')}
        />
        <StyledFormInput
          id={'repeat-password'}
          name={'repeatPassword'}
          type={'password'}
          label={t('passwordRecovery.passwordSubmissionForm.inputs.repeatPassword')}
        />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('passwordRecovery.passwordSubmissionForm.submit')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
