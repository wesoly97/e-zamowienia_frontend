import { AxiosError } from 'axios';

import { UnauthorizedError, InternalServerError, RoleTypes } from '@/api/types/types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';

export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LoginResponse = {
  _id: string;
  role: RoleTypes;
};

export type LoginError = UnauthorizedError | InternalServerError;

export type LoginMutationFn = MutationFn<LoginRequestBody, LoginResponse, AxiosError<LoginError>>;
