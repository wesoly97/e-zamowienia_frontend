import { BadRequestError, RoleTypes, UnauthorizedError } from '@/api/types/types';

export type GetSessionResponse = {
  _id: string;
  role: RoleTypes;
};

export type GetSessionError = BadRequestError | UnauthorizedError;
