import { AxiosError } from 'axios';

import { BadRequestError, ConflictError, InternalServerError } from '@/api/types/types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';

export type RegisterRequestBody = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type RegisterResponse = undefined;

export type RegisterError = BadRequestError | ConflictError | InternalServerError;

export type RegisterMutationFn = MutationFn<RegisterRequestBody, RegisterResponse, AxiosError<RegisterError>>;
