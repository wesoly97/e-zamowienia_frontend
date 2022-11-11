import { FormProvider } from 'react-hook-form';

import { Form } from './RegisterForm.styles';
import { RegisterFormProps } from './RegisterForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { PrimaryLoader } from '@/theme/shared';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const RegisterForm = ({ isSubmitting, onSubmit, form }: RegisterFormProps) => {
  const { t } = useLocaleContext();

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput id={'name'} name={'name'} label={t('register.inputs.name')} />
        <FormInput id={'surname'} name={'surname'} label={t('register.inputs.surname')} />
        <FormInput id={'email'} name={'email'} type={'email'} label={t('register.inputs.email')} />
        <FormInput id={'password'} name={'password'} type={'password'} label={t('register.inputs.password')} />
        <FormInput
          id={'repeat-password'}
          name={'repeatPassword'}
          type={'password'}
          label={t('register.inputs.repeatPassword')}
        />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('register.submit')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
