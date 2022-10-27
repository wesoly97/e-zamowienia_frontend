import { useMemo } from 'react';

import { useGetOrders } from './hooks/useGetOrders/useGetOrders';
import { Orders } from './Orders';

import { FiltersParamsController } from '@/context/filtersParams/filtersParamsController/FiltersParamsController';
import { useFiltersParams } from '@/context/filtersParams/hooks/useFiltersParams';

export const OrdersContainerRaw = () => {
  const { data, hasNextPage, fetchNextPage, fetchPreviousPage, isFetching, refetch } = useGetOrders();
  const { offset } = useFiltersParams();

  const pageData = useMemo(() => {
    if (!data?.pages || offset === undefined) {
      return null;
    }

    return data.pages[offset];
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
    <FiltersParamsController limit={5} offset={0}>
      <OrdersContainerRaw />
    </FiltersParamsController>
  );
};
