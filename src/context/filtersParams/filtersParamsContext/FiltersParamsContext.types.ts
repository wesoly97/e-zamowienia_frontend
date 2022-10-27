import { Dispatch, SetStateAction } from 'react';

export type FiltersParamsContextValue = {
  limit: 5 | 10 | 25 | 50 | 75;
  offset: number;
  setLimitArg: Dispatch<SetStateAction<5 | 10 | 25 | 50 | 75>>;
  setOffsetArg: Dispatch<SetStateAction<number>>;
};
