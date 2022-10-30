import { FiltersParamsContextValue } from '@/context/filtersParams/filtersParamsContext/FiltersParamsContext.types';

export type OrdersFormProps = {
  updateFilters: FiltersParamsContextValue['setParam'];
  onRefetch: VoidFunction;
};
