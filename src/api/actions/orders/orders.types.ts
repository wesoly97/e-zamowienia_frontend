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

export type GetOrdersResponse = {
  count: number;
  orders: Order[];
};

export type GetOrdersError = InternalServerError;

type SortOptionBody = {
  sortOption?: {
    _id?: 1 | -1;
    title?: 1 | -1;
    mode?: 1 | -1;
    category?: 1 | -1;
  };
};

type FiltersOptionBody = {
  filterOption?: {
    title?: string;
    mode?: string;
    category?: string;
  };
};

export type FiltersOptionArgs = {
  limit: 5 | 10 | 25 | 50 | 75;
  offset?: number;
};

export type GetOrdersArgs = FiltersOptionArgs & SortOptionBody & FiltersOptionBody;
