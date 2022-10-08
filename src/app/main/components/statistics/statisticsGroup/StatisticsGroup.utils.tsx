import CountUp from 'react-countup';

import { StyledCircularProgress } from './StatisticsGroup.styles';

export const getCount = ({ isLoading, number }: { isLoading: boolean; number?: number }) => {
  if (isLoading) {
    return <StyledCircularProgress />;
  }

  if (!isLoading && number) {
    return (
      <>
        <CountUp end={number} enableScrollSpy scrollSpyOnce />
        <span>+</span>
      </>
    );
  }
};
