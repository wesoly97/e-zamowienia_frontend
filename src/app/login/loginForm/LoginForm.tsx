import { FormProvider } from 'react-hook-form';

import { Form } from './LoginForm.styles';
import { LoginFormProps } from './LoginForm.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryLoader } from '@/theme/shared';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const LoginForm = ({ isSubmitting, onSubmit, form }: LoginFormProps) => {
  const { t } = useLocaleContext();

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'email'} name={'email'} type={'email'} label={t('login.inputs.email')} />
        <FormInput id={'password'} name={'password'} type={'password'} label={t('login.inputs.password')} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('login.button')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
