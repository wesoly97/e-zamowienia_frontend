import { UseFormReturn } from 'react-hook-form';

export type UserVerificationFormData = {
  phoneNumber: string;
  nip: string;
  country: string;
  companyName: string;
};

export type UserVerificationFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: UserVerificationFormData) => void;
  form: UseFormReturn<UserVerificationFormData>;
};
