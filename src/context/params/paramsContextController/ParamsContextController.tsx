import { useCallback, useMemo } from 'react';
import pick from 'lodash/pick';

import { ParamsContext } from '../paramsContext/ParamsContext';
import { ParamsContextValue, SortValue } from '../paramsContext/ParamsContext.types';

import { ParamsContextControllerProps } from './ParamsContextController.types';

import { useQueryParams } from '@/context/queryParams/hooks/useQueryParams';
import { Query } from '@/context/queryParams/queryParamsContent/QueryParamsContext.types';

export const ParamsContextController = ({ children, filtersKeys, sortKeys }: ParamsContextControllerProps) => {
  const keys = useMemo(() => [...filtersKeys, 'search'], []);
  const { query: queryParams, setQuery } = useQueryParams();
  const filterQuery = pick(queryParams, keys);
  const sortQuery = pick(queryParams['sort'], sortKeys);

  const setFilter = useCallback(
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

  const setSort = useCallback(
    (key: string, value: SortValue) => {
      setQuery((prevState) => {
        return {
          ...prevState,
          sort: {
            [key]: value,
          },
        } as Query;
      });
    },
    [setQuery],
  );

  const value = useMemo<ParamsContextValue>(
    () => ({
      filterQuery,
      sortQuery,
      setFilter,
      setSort,
    }),
    [filterQuery, sortQuery, setFilter, setSort],
  );

  return <ParamsContext.Provider value={value}>{children}</ParamsContext.Provider>;
};
