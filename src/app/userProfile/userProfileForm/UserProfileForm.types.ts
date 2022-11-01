import { UseFormReturn } from 'react-hook-form';

import { RoleTypes } from '@/api/types/types';

export type UserProfileFormData = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  nip: string;
  country: string;
  companyName: string;
};

export type UserProfileFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: UserProfileFormData) => void;
  form: UseFormReturn<UserProfileFormData>;
  userRole?: RoleTypes;
};
