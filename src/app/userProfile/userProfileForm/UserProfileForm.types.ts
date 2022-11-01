import { UseFormReturn } from 'react-hook-form';

export type UserProfileFormData = {
  name: string;
  surname: string;
};

export type UserProfileFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: UserProfileFormData) => void;
  form: UseFormReturn<UserProfileFormData>;
};
