import { DefaultOptionArgs, FilterOption, SortOption } from '@/api/actions/orders/orders.types';

export type UseGetOrdersFiltersProps = {
  limit: DefaultOptionArgs['limit'];
  offset: DefaultOptionArgs['offset'];
  filter_title: FilterOption['title'];
  filter_category: FilterOption['category'];
  filter_mode: FilterOption['mode'];
  sort_title: SortOption['title'];
  sort_price: SortOption['price'];
  sort_mode: SortOption['mode'];
  sort_category: SortOption['category'];
};
