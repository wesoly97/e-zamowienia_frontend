import { ReactNode } from 'react';

export type FiltersParamsControllerProps = {
  children: ReactNode;
  limit: 5 | 10 | 25 | 50 | 75;
  offset: number;
};
