import { AxiosError } from 'axios';
import { UseMutationOptions } from '@tanstack/react-query';

import { useMutation } from '@/hooks/useMutation/useMutation';
import {
  EditUserDataError,
  EditUserDataRequestBody,
  EditUserDataResponse,
} from '@/api/actions/userData/userData.types';
import { editUserDataMutationFn, editUserDataQueryKey } from '@/api/actions/userData/userData';

export const useUserProfile = (
  userId: string,
  options?: UseMutationOptions<EditUserDataResponse, AxiosError<EditUserDataError>, EditUserDataRequestBody>,
) => {
  return useMutation([editUserDataQueryKey, userId], editUserDataMutationFn(userId), options);
};
