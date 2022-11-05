import { useMemo } from 'react';

import { UseGetOrdersParamsFilters, UseGetOrdersParamsSort } from './useGetOrdersParams.types';

import { useParamsContext } from '@/context/params/hooks/useParamsContext';

export const useGetOrdersParams = () => {
  const { filterQuery, sortQuery, setFilter, setSort } = useParamsContext();

  const filters = useMemo(() => {
    return {
      limit: filterQuery['limit'] || '10',
      offset: filterQuery['offset'] || '0',
      filter_title: filterQuery['filter_title'],
      filter_category: filterQuery['filter_category'],
      filter_mode: filterQuery['filter_mode'],
    } as UseGetOrdersParamsFilters;
  }, [filterQuery]);

  const sort = useMemo(() => {
    return sortQuery as UseGetOrdersParamsSort;
  }, [sortQuery]);

  return {
    filters,
    sort,
    setFilter,
    setSort,
  };
};
