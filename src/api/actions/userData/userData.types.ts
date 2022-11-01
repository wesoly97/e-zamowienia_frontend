import { AxiosError } from 'axios';

import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  RoleTypes,
  UnauthorizedError,
} from '@/api/types/types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';

export type EditUserDataRequestBody = {
  name: string;
  surname: string;
};

export type EditUserDataResponse = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  accountType: RoleTypes;
  dateOfCreation: string;
  nip: string;
  country: string;
  companyName: string;
};

export type EditUserDataError =
  | BadRequestError
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | ConflictError
  | InternalServerError;

export type EditUserDataMutationFn = MutationFn<
  EditUserDataRequestBody,
  EditUserDataResponse,
  AxiosError<EditUserDataError>
>;

export type GetUserDataResponse = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  accountType: RoleTypes;
  dateOfCreation: string;
  nip: string;
  country: string;
  companyName: string;
};

export type GetUserDataError =
  | BadRequestError
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | InternalServerError;
