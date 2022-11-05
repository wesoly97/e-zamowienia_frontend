import { UseGetOrdersFiltersProps } from '../hooks/useGetOrdersFilters/useGetOrdersFilters.types';

import { FiltersParamsContextValue } from '@/context/filtersParams/filtersParamsContext/FiltersParamsContext.types';

export type OrdersFormProps = {
  updateFilters: FiltersParamsContextValue['setFilter'];
  filters: Omit<UseGetOrdersFiltersProps, 'limit' | 'offset'>;
};
