import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  UserVerificationError,
  UserVerificationRequestBody,
  UserVerificationResponse,
} from '@/api/actions/userVerification/userVerification.types';
import { useMutation } from '@/hooks/useMutation/useMutation';
import { userVerificationMutationFn, userVerificationQueryKey } from '@/api/actions/userVerification/userVerification';

export const useUserVerification = (
  options?: UseMutationOptions<
    UserVerificationResponse,
    AxiosError<UserVerificationError>,
    UserVerificationRequestBody
  >,
) => {
  return useMutation([userVerificationQueryKey], userVerificationMutationFn, options);
};
