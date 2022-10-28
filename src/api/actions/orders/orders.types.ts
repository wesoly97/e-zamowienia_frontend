import { AxiosError } from 'axios';

import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  UnauthorizedError,
  ForbiddenError,
  ResponseFile,
} from '@/api/types/types';
import { InfiniteQueryFn } from '@/hooks/useInfiniteQuery/useInfiniteQuery.types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';

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

export type GetOrdersInfiniteQueryFn = InfiniteQueryFn<GetOrdersArgs, GetOrdersResponse>;

export type SortOptionArgs = {
  sortOption?: {
    _id?: 1 | -1;
    title?: 1 | -1;
    mode?: 1 | -1;
    category?: 1 | -1;
  };
};

export type FiltersOptionArgs = {
  filterOption?: {
    title?: string;
    mode?: string;
    category?: string;
  };
};

export type DefaultOptionArgs = {
  limit?: '5' | '10' | '25' | '50' | '75';
  offset?: string;
};

export type GetOrdersArgs = DefaultOptionArgs & SortOptionArgs & FiltersOptionArgs;

export type GetOrdersDetailsResponse = {
  _id: string;
  procedureIdentifier: string;
  category: string;
  mode: string;
  title: string;
  description: string;
  customerName: string;
  price: number;
  files: ResponseFile[];
  dateOfPublication: string;
  ownerId: string;
  expirationDate: string;
  phoneNumber: string;
  country: string;
  email: string;
};

export type GetOrdersDetailsError = BadRequestError | NotFoundError | InternalServerError;

export type AddOrdersResponse = {
  _id: string;
  procedureIdentifier: string;
  category: string;
  mode: string;
  title: string;
  description: string;
  customerName: string;
  price: string;
  files: ResponseFile[];
  dateOfPublication: string;
  ownerId: string;
  expirationDate: string;
};

export type AddOrdersError = BadRequestError | UnauthorizedError | ForbiddenError | InternalServerError;

export type AddOrdersMutationFn = MutationFn<FormData, AddOrdersResponse, AxiosError<AddOrdersError>>;

export type EditOrdersResponse = {
  _id: string;
  procedureIdentifier: string;
  category: string;
  mode: string;
  title: string;
  description: string;
  customerName: string;
  price: string;
  files: ResponseFile[];
  dateOfPublication: string;
  ownerId: string;
  expirationDate: string;
};

export type EditOrdersError = BadRequestError | UnauthorizedError | NotFoundError | InternalServerError;

export type EditOrdersMutationFn = MutationFn<FormData, EditOrdersResponse, AxiosError<EditOrdersError>>;
