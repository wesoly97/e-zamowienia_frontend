import { useContext } from 'react';

import { FiltersParamsContext } from '../filtersParamsContext/FiltersParamsContext';

export const useFiltersParamsContext = () => {
  const ctx = useContext(FiltersParamsContext);

  if (!ctx) {
    throw new Error(
      'useFiltersParamsContext hook is not wrapped by FiltersParamsContextController provider or Context value is not provided',
    );
  }

  return ctx;
};
