import { InternalServerError } from '@/api/types/types';

export type Order = {
  _id: string;
  procedureIdentifier: string;
  category: string;
  mode: string;
  title: string;
  price: number;
  dateOfPublication: string;
  expirationDate: string;
};

export type GetOrdersResponse = Order[];

export type GetOrdersError = InternalServerError;
