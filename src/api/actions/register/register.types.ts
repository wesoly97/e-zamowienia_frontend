import { BadRequestError, ConflictError, InternalServerError } from '@/api/types/types';

export type RegisterRequestBody = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type RegisterResponse = undefined;

export type RegisterError = BadRequestError | ConflictError | InternalServerError;
