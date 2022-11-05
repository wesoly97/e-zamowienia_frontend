import { useMemo } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { useGetOrders } from './hooks/useGetOrders/useGetOrders';
import { Orders } from './Orders';
import { isNumber } from './Orders.utils';
import { useGetOrdersFilters } from './hooks/useGetOrdersFilters/useGetOrdersFilters';
import { OrdersForm } from './ordersForm/OrdersForm';

import { QueryParamsContextController } from '@/context/queryParams/queryParamsController/QueryParamsContextController';
import { FiltersParamsContextController } from '@/context/filtersParams/filtersParamsContextController/FiltersParamsContextController';

const OrdersContainerRaw = () => {
  const { data, hasNextPage, fetchNextPage, fetchPreviousPage, isFetching, refetch } = useGetOrders();
  const { offset, limit, setFilter, ...params } = useGetOrdersFilters();

  if (!data?.pages[Number(offset)]) {
    //todo redirect to offset 0
  }

  const pageData = useMemo(() => {
    if (!data?.pages || !offset || !isNumber(offset)) {
      return null;
    }

    return data.pages[Number(offset)];
  }, [data?.pages, offset]);

  useDeepCompareEffect(() => {
    refetch();
  }, [limit, params]);

  return (
    <>
      <OrdersForm updateFilters={setFilter} filters={params} />
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
      <FiltersParamsContextController
        filtersKeys={[
          'offset',
          'limit',
          'filter_title',
          'filter_category',
          'filter_mode',
          'sort_price',
          'sort_title',
          'sort_mode',
          'sort_category',
        ]}
      >
        <OrdersContainerRaw />
      </FiltersParamsContextController>
    </QueryParamsContextController>
  );
};
