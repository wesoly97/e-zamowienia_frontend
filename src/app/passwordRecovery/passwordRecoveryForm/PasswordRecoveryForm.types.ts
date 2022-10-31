import { UseFormReturn } from 'react-hook-form';

export type PasswordRecoveryFormData = {
  email: string;
};

export type PasswordRecoveryFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: PasswordRecoveryFormData) => void;
  form: UseFormReturn<PasswordRecoveryFormData>;
};
