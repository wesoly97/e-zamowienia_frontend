import { Query } from '@/context/queryParams/queryParamsContent/QueryParamsContext.types';

export type FiltersParamsContextValue = {
  query: Query;
  setFilter: (key: string, value: string) => void;
};
