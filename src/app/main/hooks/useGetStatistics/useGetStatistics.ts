import { UseQueryOptions } from '@tanstack/react-query';

import { getStatisticsQueryKey } from '@/api/actions/statistics/statistics';
import { GetStatisticsError, GetStatisticsResponse } from '@/api/actions/statistics/statistics.types';
import { useQuery } from '@/hooks/useQuery/useQuery';

export const useGetStatistics = (options?: UseQueryOptions<GetStatisticsResponse, GetStatisticsError>) => {
  return useQuery<GetStatisticsResponse, GetStatisticsError>([getStatisticsQueryKey], options);
};
