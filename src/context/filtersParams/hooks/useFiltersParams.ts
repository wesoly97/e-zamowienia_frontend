import { useContext } from 'react';

import { FiltersParamsContext } from '../filtersParamsContext/FiltersParamsContext';

export const useFiltersParams = () => {
  const ctx = useContext(FiltersParamsContext);

  if (!ctx) {
    throw new Error(
      'useFiltersParams hook is not wrapped by FiltersParamsContext provider or Context value is not provided',
    );
  }

  return ctx;
};
