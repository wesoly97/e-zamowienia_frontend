import { BadRequestError, RoleTypes, UnauthorizedError } from '@/api/types/types';

export type GetSessionResponse = {
  _id: string;
  accountType: RoleTypes;
};

export type GetSessionError = BadRequestError | UnauthorizedError;
