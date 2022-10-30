import { UseFormReturn } from 'react-hook-form';

export type OrdersAddFormData = {
  procedureIdentifier: string;
  category: string;
  mode: string;
  title: string;
  price: number;
  description: string;
  files?: File[];
  expirationDate: string;
};

export type OrdersAddFormProps = {
  isSubmitting: boolean;
  onSubmit: (data: OrdersAddFormData) => void;
  form: UseFormReturn<OrdersAddFormData>;
};
