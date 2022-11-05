import { SortQuery, FilterQuery } from '@/context/queryParams/queryParamsContent/QueryParamsContext.types';

export type SortValue = '1' | '-1';

export type ParamsContextValue = {
  filterQuery: FilterQuery;
  sortQuery: SortQuery;
  setFilter: (key: string, value: string) => void;
  setSort: (key: string, value: SortValue) => void;
};
