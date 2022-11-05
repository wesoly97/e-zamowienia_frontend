import { UseGetOrdersParamsFilters } from '../hooks/useGetOrdersParams/useGetOrdersParams.types';

import { ParamsContextValue } from '@/context/params/paramsContext/ParamsContext.types';

export type OrdersFormProps = {
  updateFilters: ParamsContextValue['setFilter'];
  filters: Omit<UseGetOrdersParamsFilters, 'limit' | 'offset'>;
};
