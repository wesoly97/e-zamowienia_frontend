import { cloneElement, JSXElementConstructor, ReactElement, useMemo } from 'react';
import CountUp from 'react-countup';

import { Description, Stats, Count, StyledCircularProgress } from './StatisticsGroup.styles';
import { StatisticsGroupProps } from './StatisticsGroup.types';

export const StatisticsGroup = ({ icon, isLoading, description, number }: StatisticsGroupProps) => {
  const countNumber = useMemo(() => {
    if (isLoading) {
      return <StyledCircularProgress />;
    }

    if (number === 0) {
      return number;
    }

    if (!isLoading && number) {
      return (
        <CountUp start={0} end={number} enableScrollSpy scrollSpyOnce>
          {({ countUpRef }) => <Count ref={countUpRef} />}
        </CountUp>
      );
    }
  }, [isLoading, number]);

  return (
    <Stats>
      {cloneElement(icon as ReactElement<unknown, string | JSXElementConstructor<unknown>>)}
      {countNumber}
      <Description>{description}</Description>
    </Stats>
  );
};
