import { useMemo } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { Orders } from './Orders';
import { OrdersForm } from './ordersForm/OrdersForm';
import { Container } from './Orders.styles';

import { useGetOrders } from '@/hooks/useGetOrders/useGetOrders';
import { useGetOrdersParams } from '@/hooks/useGetOrdersParams/useGetOrdersParams';

export const OrdersContainerRaw = () => {
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
    if (!data?.pages || !offset) {
      return null;
    }

    return data.pages[Number(offset)];
  }, [data?.pages, offset]);

  useDeepCompareEffect(() => {
    refetch();
  }, [limit, restFilters, sort]);

  return (
    <Container>
      <OrdersForm updateFilters={setFilter} filters={restFilters} />
      <Orders
        data={pageData?.orders ?? []}
        count={pageData?.count ?? 0}
        hasNextPage={hasNextPage}
        onNextPage={fetchNextPage}
        onPreviousPage={fetchPreviousPage}
        isLoading={isFetching}
      />
    </Container>
  );
};
