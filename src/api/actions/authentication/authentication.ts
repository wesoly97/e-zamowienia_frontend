import { AxiosError } from 'axios';

import { LoginError, LoginRequestBody, LoginResponse } from './authentication.types';

import { MutationFn } from '@/hooks/useMutation/useMutation.types';
import { HTTPMethods } from '@/api/types/types';

export const loginKey = 'users/login';

export const loginMutationFn: MutationFn<LoginRequestBody, LoginResponse, AxiosError<LoginError>> = (params) => ({
  endpoint: loginKey,
  method: HTTPMethods.Post,
  params,
});
