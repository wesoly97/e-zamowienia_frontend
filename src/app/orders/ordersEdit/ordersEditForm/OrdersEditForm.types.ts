import { UseFormReturn } from 'react-hook-form';

import { ResponseFile } from '@/api/types/types';

export type OrdersEditFormData = {
  procedureIdentifier: string;
  category: string;
  mode: string;
  title: string;
  price: number;
  description: string;
  files?: File[];
  expirationDate: string;
};

export type OrdersEditFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: OrdersEditFormData) => void;
  form: UseFormReturn<OrdersEditFormData>;
  minExpirationDate?: string;
  initialFiles?: ResponseFile[];
};
