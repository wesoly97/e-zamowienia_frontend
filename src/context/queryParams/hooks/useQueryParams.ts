import { useContext } from 'react';

import { QueryParamsContext } from '../queryParamsContent/QueryParamsContext';

export const useQueryParams = () => {
  const ctx = useContext(QueryParamsContext);

  if (!ctx) {
    throw new Error(
      'useQueryParams hook is not wrapped by QueryParamsController provider or Context value is not provided',
    );
  }

  return ctx;
};
