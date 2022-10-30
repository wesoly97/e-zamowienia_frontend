import { useCallback, useMemo } from 'react';

import { FiltersParamsContext } from '../filtersParamsContext/FiltersParamsContext';
import { FiltersParamsContextValue } from '../filtersParamsContext/FiltersParamsContext.types';

import { FiltersParamsControllerProps } from './FiltersParamsController.types';

import { useQueryParams } from '@/context/queryParams/hooks/useQueryParams';
import { pick } from '@/utils/pick';

export const FiltersParamsController = ({ children, filtersKeys }: FiltersParamsControllerProps) => {
  const keys = useMemo(() => [...filtersKeys, 'search'], []);
  const { query: queryParams, setQuery } = useQueryParams();
  const query = pick(queryParams, keys);

  const setParam = useCallback(
    (key: string, value: number | string | string[]) => {
      const parsedValue = String(value);

      setQuery((prevState) => ({
        ...prevState,
        ...(!!key && { [key]: parsedValue }),
      }));
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
