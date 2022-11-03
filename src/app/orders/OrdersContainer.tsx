import { useEffect, useMemo } from 'react';

import { useGetOrders } from './hooks/useGetOrders/useGetOrders';
import { Orders } from './Orders';
import { isNumber } from './Orders.utils';
import { useGetOrdersFilters } from './hooks/useGetOrdersFilters/useGetOrdersFilters';
import { OrdersForm } from './ordersForm/OrdersForm';

import { QueryParamsContextController } from '@/context/queryParams/queryParamsController/QueryParamsContextController';
import { FiltersParamsContextController } from '@/context/filtersParams/filtersParamsContextController/FiltersParamsContextController';

const OrdersContainerRaw = () => {
  const { data, hasNextPage, fetchNextPage, fetchPreviousPage, isFetching, refetch } = useGetOrders();
  const { offset, limit, setParam } = useGetOrdersFilters();

  if (!data?.pages[Number(offset)]) {
    //todo redirect to offset 0
  }

  const pageData = useMemo(() => {
    if (!data?.pages || !offset || !isNumber(offset)) {
      return null;
    }

    return data.pages[Number(offset)];
  }, [data?.pages, offset]);

  useEffect(() => {
    refetch();
  }, [limit]);

  return (
    <>
      <OrdersForm updateFilters={setParam} onRefetch={refetch} />
      <Orders
        data={pageData?.orders ?? []}
        count={pageData?.count ?? 0}
        hasNextPage={hasNextPage}
        onNextPage={fetchNextPage}
        onPreviousPage={fetchPreviousPage}
        isLoading={isFetching}
      />
    </>
  );
};

export const OrdersContainer = () => {
  return (
    <QueryParamsContextController>
      <FiltersParamsContextController filtersKeys={['offset', 'limit', 'filterOption', 'sortOption']}>
        <OrdersContainerRaw />
      </FiltersParamsContextController>
    </QueryParamsContextController>
  );
};
