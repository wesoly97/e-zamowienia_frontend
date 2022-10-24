import { UseFormReturn } from 'react-hook-form';

export type RegisterFormData = {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type RegisterFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: RegisterFormData) => void;
  form: UseFormReturn<RegisterFormData>;
};
