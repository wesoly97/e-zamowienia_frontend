import { UseFormReturn } from 'react-hook-form';

export type UserProfileChangePasswordFormData = {
  currentPassword: string;
  password: string;
  repeatPassword: string;
};

export type UserProfileChangePasswordFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: UserProfileChangePasswordFormData) => void;
  form: UseFormReturn<UserProfileChangePasswordFormData>;
};
