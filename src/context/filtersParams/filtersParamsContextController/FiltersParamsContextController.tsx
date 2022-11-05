import { useCallback, useMemo } from 'react';
import pick from 'lodash/pick';

import { FiltersParamsContext } from '../filtersParamsContext/FiltersParamsContext';
import { FiltersParamsContextValue } from '../filtersParamsContext/FiltersParamsContext.types';

import { FiltersParamsContextControllerProps } from './FiltersParamsContextController.types';

import { useQueryParams } from '@/context/queryParams/hooks/useQueryParams';

export const FiltersParamsContextController = ({ children, filtersKeys }: FiltersParamsContextControllerProps) => {
  const keys = useMemo(() => [...filtersKeys, 'search'], []);
  const { query: queryParams, setQuery } = useQueryParams();
  const query = pick(queryParams, keys);

  const setParam = useCallback(
    (key: string, value: string) => {
      setQuery((prevState) => {
        return {
          ...prevState,
          [key]: value,
        };
      });
    },
    [setQuery],
  );

  const value = useMemo<FiltersParamsContextValue>(
    () => ({
      query,
      setParam,
    }),
    [query, setParam],
  );

  return <FiltersParamsContext.Provider value={value}>{children}</FiltersParamsContext.Provider>;
};
