import { ParamsContextValue } from '@/context/params/paramsContext/ParamsContext.types';
import { UseGetOrdersParamsFilters } from '@/hooks/useGetOrdersParams/useGetOrdersParams.types';

export type UserOrdersFormProps = {
  updateFilters: ParamsContextValue['setFilter'];
  filters: Omit<UseGetOrdersParamsFilters, 'limit' | 'offset'>;
};
