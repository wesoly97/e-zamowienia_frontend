import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { useMutation } from '@/hooks/useMutation/useMutation';
import { registerKey, registerMutationFn } from '@/api/actions/register/register';
import { RegisterError, RegisterRequestBody, RegisterResponse } from '@/api/actions/register/register.types';

export const useRegister = (
  options?: UseMutationOptions<RegisterResponse, AxiosError<RegisterError>, RegisterRequestBody>,
) => {
  return useMutation([registerKey], registerMutationFn, options);
};
