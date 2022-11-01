import { UseFormReturn } from 'react-hook-form';

export type PasswordRecoveryResetFormWrapperProps = {
  token: string;
};

export type PasswordRecoveryResetFormData = {
  password: string;
  repeatPassword: string;
};

export type PasswordRecoveryResetFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: PasswordRecoveryResetFormData) => void;
  form: UseFormReturn<PasswordRecoveryResetFormData>;
};
