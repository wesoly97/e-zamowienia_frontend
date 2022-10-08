import { useGetStatistics } from '../../hooks/useGetStatistics/useGetStatistics';

import { Statistics } from './Statistics';

export const StatisticsContainer = () => {
  const { data, isLoading } = useGetStatistics({
    retry: 3,
  });

  return (
    <>
      <Statistics data={data} isLoading={isLoading || !data} />
    </>
  );
};
