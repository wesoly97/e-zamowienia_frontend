import { GetStatisticsResponse } from '@/api/actions/statistics/statistics.types';

export type StatisticsProps = {
  data?: GetStatisticsResponse;
  isLoading: boolean;
};
