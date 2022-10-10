import { AxiosError } from 'axios';

import { RegisterError, RegisterRequestBody, RegisterResponse } from './register.types';

import { MutationFn } from '@/hooks/useMutation/useMutation.types';
import { HTTPMethods } from '@/api/types/types';

export const registerKey = 'users';

export const registerMutationFn: MutationFn<RegisterRequestBody, RegisterResponse, AxiosError<RegisterError>> = (
  params,
) => ({
  endpoint: registerKey,
  method: HTTPMethods.Post,
  params,
});
