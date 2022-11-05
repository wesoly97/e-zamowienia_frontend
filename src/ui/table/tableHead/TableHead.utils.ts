import { SortValue } from '@/context/params/paramsContext/ParamsContext.types';

export const getStringifySortOption = (sortOption: SortValue) => {
  if (sortOption === '-1') {
    return 'desc';
  }

  return 'asc';
};
