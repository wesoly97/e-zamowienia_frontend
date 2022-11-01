import { useMemo } from 'react';

import { DefaultOptionArgs, FiltersOptionArgs, SortOptionArgs } from '@/api/actions/orders/orders.types';
import { useFiltersParamsContext } from '@/context/filtersParams/hooks/useFiltersParamsContext';

export const useGetOrdersFilters = () => {
  const { query, setParam } = useFiltersParamsContext();

  const params = useMemo(() => {
    return {
      limit: (query['limit'] as DefaultOptionArgs['limit']) || '10',
      offset: (query['offset'] as DefaultOptionArgs['offset']) || '0',
      filterOption: (query['filterOption'] as FiltersOptionArgs['filterOption']) || {},
      sortOption: (query['sortOption'] as SortOptionArgs['sortOption']) || {},
    };
  }, [query]);

  return {
    ...params,
    setParam,
  };
};
