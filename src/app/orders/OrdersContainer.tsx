import { useMemo } from 'react';

import { useGetOrders } from './hooks/useGetOrders/useGetOrders';
import { Orders } from './Orders';
import { isNumber } from './Orders.utils';
import { useGetOrdersFilters } from './hooks/useGetOrdersFilters/useGetOrdersFilters';

import { QueryParamsContextController } from '@/context/queryParams/queryParamsController/QueryParamsContextController';
import { FiltersParamsController } from '@/context/filtersParams/filtersParamsController/FiltersParamsController';

export const OrdersContainerRaw = () => {
  const { data, hasNextPage, fetchNextPage, fetchPreviousPage, isFetching, refetch } = useGetOrders();
  const { offset } = useGetOrdersFilters();

  if (!data?.pages[Number(offset)]) {
    //todo redirect to offset 0
  }

  const pageData = useMemo(() => {
    if (!data?.pages || !offset || !isNumber(offset)) {
      return null;
    }

    return data.pages[Number(offset)];
  }, [data?.pages, offset]);

  if (!pageData || isFetching) {
    return null;
  }

  return (
    <Orders
      data={pageData.orders ?? []}
      count={pageData.count ?? 0}
      hasNextPage={hasNextPage}
      onNextPage={fetchNextPage}
      onPreviousPage={fetchPreviousPage}
      onRefetch={refetch}
    />
  );
};

export const OrdersContainer = () => {
  return (
    <QueryParamsContextController>
      <FiltersParamsController filtersKeys={['offset', 'limit', 'filterOption', 'sortOption']}>
        <OrdersContainerRaw />
      </FiltersParamsController>
    </QueryParamsContextController>
  );
};
