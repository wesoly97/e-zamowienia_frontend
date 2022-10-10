import { UnauthorizedError, InternalServerError, RoleTypes } from '@/api/types/types';

export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LoginResponse = {
  _id: string;
  role: RoleTypes;
};

export type LoginError = UnauthorizedError | InternalServerError;
