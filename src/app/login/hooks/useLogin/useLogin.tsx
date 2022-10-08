import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { LoginError, LoginRequestBody, LoginResponse } from '@/api/actions/authentication/authentication.types';
import { useMutation } from '@/hooks/useMutation/useMutation';
import { loginKey, loginMutationFn } from '@/api/actions/authentication/authentication';

export const useLogin = (options?: UseMutationOptions<LoginResponse, AxiosError<LoginError>, LoginRequestBody>) => {
  return useMutation([loginKey], loginMutationFn, options);
};
