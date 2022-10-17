import { useMemo } from 'react';

import { useGetOrders } from './hooks/useGetOrders/useGetOrders';
import { Orders } from './Orders';

import { FiltersParamsController } from '@/context/filtersParams/filtersParamsController/FiltersParamsController';

export const OrdersContainerRaw = () => {
  const { data, hasNextPage, fetchNextPage, isFetching, refetch } = useGetOrders();

  const allData = useMemo(() => {
    return data?.pages.flatMap((page) => page.orders);
  }, [data]);

  if (!allData || isFetching) {
    return null;
  }

  return <Orders data={allData ?? []} hasNextPage={hasNextPage} onLoadMore={fetchNextPage} onRefetch={refetch} />;
};

export const OrdersContainer = () => {
  return (
    <FiltersParamsController limit={5} offset={0}>
      <OrdersContainerRaw />
    </FiltersParamsController>
  );
};
