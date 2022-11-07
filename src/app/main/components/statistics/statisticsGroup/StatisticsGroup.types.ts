import { ReactElement } from 'react';

export type StatisticsGroupProps = {
  icon: ReactElement;
  isLoading: boolean;
  description: string;
  number?: number;
};
