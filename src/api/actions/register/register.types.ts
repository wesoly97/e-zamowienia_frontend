import { BadRequestError, ConflictError, InternalServerError } from '@/api/types/types';

export type RegisterRequestBody = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type RegisterResponse = {};

export type RegisterError = BadRequestError | ConflictError | InternalServerError;
