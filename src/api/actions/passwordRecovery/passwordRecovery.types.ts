import { AxiosError } from 'axios';

import { MutationFn } from '@/hooks/useMutation/useMutation.types';
import { BadRequestError, NotFoundError, InternalServerError } from '@/api/types/types';

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
