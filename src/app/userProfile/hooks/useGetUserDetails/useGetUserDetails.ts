import { UseQueryOptions } from '@tanstack/react-query';

import { useQuery } from '@/hooks/useQuery/useQuery';
import { GetUserDataError, GetUserDataResponse } from '@/api/actions/userData/userData.types';
import { getUserDataQueryKey } from '@/api/actions/userData/userData';
import { AppRoute } from '@/routing/AppRoutes.types';

export const useGetUserDetails = (userId: string, options?: UseQueryOptions<GetUserDataResponse, GetUserDataError>) => {
  return useQuery<GetUserDataResponse, GetUserDataError>(
    [getUserDataQueryKey.replace(AppRoute.UserId, userId)],
    options,
  );
};
