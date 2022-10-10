import { AxiosError } from 'axios';

import { LogoutError, LogoutRequestBody, LogoutResponse } from './logout.types';

import { HTTPMethods } from '@/api/types/types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';

export const logoutKey = 'users/logout';

export const logoutMutationFn: MutationFn<LogoutRequestBody, LogoutResponse, AxiosError<LogoutError>> = (params) => ({
  endpoint: logoutKey,
  method: HTTPMethods.Post,
  params,
});
