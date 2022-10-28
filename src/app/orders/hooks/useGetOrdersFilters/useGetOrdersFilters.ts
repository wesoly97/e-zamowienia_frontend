import { useMemo } from 'react';

import { DefaultOptionArgs, FiltersOptionArgs, SortOptionArgs } from '@/api/actions/orders/orders.types';
import { useFiltersParams } from '@/context/filtersParams/hooks/useFiltersParams';

export const useGetOrdersFilters = () => {
  const { query } = useFiltersParams();

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
  };
};
