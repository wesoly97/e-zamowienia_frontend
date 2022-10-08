import { cloneElement, JSXElementConstructor, ReactElement } from 'react';

import { Description, Stats, Count } from './StatisticsGroup.styles';
import { StatisticsGroupProps } from './StatisticsGroup.types';
import { getCount } from './StatisticsGroup.utils';

export const StatisticsGroup = ({ icon, isLoading, description, number }: StatisticsGroupProps) => {
  return (
    <Stats>
      {cloneElement(icon as ReactElement<unknown, string | JSXElementConstructor<unknown>>)}
      <Count>{getCount({ isLoading, number })}</Count>
      <Description>{description}</Description>
    </Stats>
  );
};
