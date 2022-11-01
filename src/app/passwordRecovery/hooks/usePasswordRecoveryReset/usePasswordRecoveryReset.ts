import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  PasswordResetError,
  PasswordResetRequestBody,
  PasswordResetResponse,
} from '@/api/actions/password/password.types';
import { useMutation } from '@/hooks/useMutation/useMutation';
import { passwordResetMutationFn, passwordResetQueryKey } from '@/api/actions/password/password';

export const usePasswordRecoveryReset = (
  options?: UseMutationOptions<PasswordResetResponse, AxiosError<PasswordResetError>, PasswordResetRequestBody>,
) => {
  return useMutation([passwordResetQueryKey], passwordResetMutationFn, options);
};
