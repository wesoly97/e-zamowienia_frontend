import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  PasswordChangeError,
  PasswordChangeRequestBody,
  PasswordChangeResponse,
} from '@/api/actions/password/password.types';
import { useMutation } from '@/hooks/useMutation/useMutation';
import { passwordChangeMutationFn, passwordChangeQueryKey } from '@/api/actions/password/password';

export const useChangePassword = (
  options?: UseMutationOptions<PasswordChangeResponse, AxiosError<PasswordChangeError>, PasswordChangeRequestBody>,
) => {
  return useMutation([passwordChangeQueryKey], passwordChangeMutationFn, options);
};
