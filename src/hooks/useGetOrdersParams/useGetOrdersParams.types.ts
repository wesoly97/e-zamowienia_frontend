import { DefaultOptionArgs, FilterOption } from '@/api/actions/orders/orders.types';
import { SortQuery } from '@/context/queryParams/queryParamsContent/QueryParamsContext.types';

export type UseGetOrdersParamsFilters = {
  limit: DefaultOptionArgs['limit'];
  offset: DefaultOptionArgs['offset'];
  filter_title: FilterOption['title'];
  filter_category: FilterOption['category'];
  filter_mode: FilterOption['mode'];
};

export type UseGetOrdersParamsSort = SortQuery;
