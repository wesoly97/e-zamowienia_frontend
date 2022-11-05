import { useMemo } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { useGetOrders } from './hooks/useGetOrders/useGetOrders';
import { Orders } from './Orders';
import { isNumber } from './Orders.utils';
import { OrdersForm } from './ordersForm/OrdersForm';
import { useGetOrdersParams } from './hooks/useGetOrdersParams/useGetOrdersParams';

import { QueryParamsContextController } from '@/context/queryParams/queryParamsController/QueryParamsContextController';
import { ParamsContextController } from '@/context/params/paramsContextController/ParamsContextController';

const OrdersContainerRaw = () => {
  const { data, hasNextPage, fetchNextPage, fetchPreviousPage, isFetching, refetch } = useGetOrders();
  const {
    filters: { limit, offset, ...restFilters },
    sort,
    setFilter,
  } = useGetOrdersParams();

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
  }, [limit, restFilters, sort]);

  return (
    <>
      <OrdersForm updateFilters={setFilter} filters={restFilters} />
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
      <ParamsContextController
        filtersKeys={['offset', 'limit', 'filter_title', 'filter_category', 'filter_mode']}
        sortKeys={['price', 'title', 'mode', 'category']}
      >
        <OrdersContainerRaw />
      </ParamsContextController>
    </QueryParamsContextController>
  );
};
