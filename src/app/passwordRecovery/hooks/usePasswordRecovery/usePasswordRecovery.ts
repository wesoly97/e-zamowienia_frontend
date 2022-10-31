import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  PasswordRecoveryError,
  PasswordRecoveryRequestBody,
  PasswordRecoveryResponse,
} from '@/api/actions/passwordRecovery/passwordRecovery.types';
import { useMutation } from '@/hooks/useMutation/useMutation';
import { passwordRecoveryMutationFn, passwordRecoveryQueryKey } from '@/api/actions/passwordRecovery/passwordRecovery';

export const usePasswordRecovery = (
  options?: UseMutationOptions<
    PasswordRecoveryResponse,
    AxiosError<PasswordRecoveryError>,
    PasswordRecoveryRequestBody
  >,
) => {
  return useMutation([passwordRecoveryQueryKey], passwordRecoveryMutationFn, options);
};
