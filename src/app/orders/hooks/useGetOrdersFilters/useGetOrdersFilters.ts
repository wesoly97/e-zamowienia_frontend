import { useMemo } from 'react';

import { UseGetOrdersFiltersProps } from './useGetOrdersFilters.types';

import { useFiltersParamsContext } from '@/context/filtersParams/hooks/useFiltersParamsContext';

export const useGetOrdersFilters = () => {
  const { query, setParam } = useFiltersParamsContext();
  const params = useMemo(() => {
    return {
      limit: query['limit'] || '10',
      offset: query['offset'] || '0',
      filter_title: query['filter_title'],
      filter_category: query['filter_category'],
      filter_mode: query['filter_mode'],
      sort_id: query['sort_id'],
      sort_title: query['sort_title'],
      sort_mode: query['sort_mode'],
      sort_category: query['sort_category'],
    } as UseGetOrdersFiltersProps;
  }, [query]);

  return {
    ...params,
    setParam,
  };
};
