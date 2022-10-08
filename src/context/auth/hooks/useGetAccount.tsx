import { UseQueryOptions } from '@tanstack/react-query';

import { GetSessionError, GetSessionResponse } from '@/api/actions/session/session.types';
import { useQuery } from '@/hooks/useQuery/useQuery';
import { getSessionQueryKey } from '@/api/actions/session/session';

export const useGetAccount = (options?: UseQueryOptions<GetSessionResponse, GetSessionError>) => {
  return useQuery<GetSessionResponse, GetSessionError>([getSessionQueryKey], options);
};
