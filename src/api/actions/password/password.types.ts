import { AxiosError } from 'axios';

import { MutationFn } from '@/hooks/useMutation/useMutation.types';
import { BadRequestError, NotFoundError, InternalServerError, UnauthorizedError } from '@/api/types/types';

export type PasswordRecoveryRequestBody = {
  email: string;
};

export type PasswordRecoveryResponse = {
  message: string;
};

export type PasswordRecoveryError = BadRequestError | NotFoundError | InternalServerError;

export type PasswordRecoveryMutationFn = MutationFn<
  PasswordRecoveryRequestBody,
  PasswordRecoveryResponse,
  AxiosError<PasswordRecoveryError>
>;

export type PasswordResetRequestBody = {
  token: string;
  password: string;
  repeatPassword: string;
};

export type PasswordResetResponse = {
  message: string;
};

export type PasswordResetError = BadRequestError | UnauthorizedError | InternalServerError;

export type PasswordResetMutationFn = MutationFn<
  PasswordResetRequestBody,
  PasswordResetResponse,
  AxiosError<PasswordResetError>
>;
