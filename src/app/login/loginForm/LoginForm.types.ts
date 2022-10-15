import { UseFormReturn } from 'react-hook-form';

export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: LoginFormData) => void;
  form: UseFormReturn<LoginFormData>;
};
