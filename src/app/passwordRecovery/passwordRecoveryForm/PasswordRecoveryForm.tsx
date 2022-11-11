import { FormProvider } from 'react-hook-form';

import { Form, StyledFormInput } from './PasswordRecoveryForm.styles';
import { PasswordRecoveryFormProps } from './PasswordRecoveryForm.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { PrimaryLoader } from '@/theme/shared';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const PasswordRecoveryForm = ({ isSubmitting, onSubmit, form }: PasswordRecoveryFormProps) => {
  const { t } = useLocaleContext();

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <StyledFormInput
          id={'email'}
          name={'email'}
          type={'email'}
          label={t('passwordRecovery.emailSubmissionForm.inputs.email')}
          variant={'filled'}
        />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('passwordRecovery.emailSubmissionForm.submit')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
