import { AxiosError } from 'axios';

import { MutationFn } from '@/hooks/useMutation/useMutation.types';
import { BadRequestError, InternalServerError, NotFoundError, UnauthorizedError } from '@/api/types/types';

export type UserVerificationRequestBody = {
  phoneNumber: string;
  nip: string;
  country: string;
  companyName: string;
};

export type UserVerificationResponse = undefined;

export type UserVerificationError = BadRequestError | UnauthorizedError | NotFoundError | InternalServerError;

export type UserVerificationMutationFn = MutationFn<
  UserVerificationRequestBody,
  UserVerificationResponse,
  AxiosError<UserVerificationError>
>;
