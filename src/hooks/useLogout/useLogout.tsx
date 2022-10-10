import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { useMutation } from '@/hooks/useMutation/useMutation';
import { LogoutResponse, LogoutError, LogoutRequestBody } from '@/api/actions/logout/logout.types';
import { logoutKey, logoutMutationFn } from '@/api/actions/logout/logout';

export const useLogout = (options?: UseMutationOptions<LogoutResponse, AxiosError<LogoutError>, LogoutRequestBody>) => {
  return useMutation([logoutKey], logoutMutationFn, options);
};
