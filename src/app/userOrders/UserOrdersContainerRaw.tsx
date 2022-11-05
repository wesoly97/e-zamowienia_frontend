import { useMemo } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { UserOrdersForm } from './userOrdersForm/UserOrdersForm';
import { UserOrders } from './UserOrders';

import { useGetOrdersParams } from '@/hooks/useGetOrdersParams/useGetOrdersParams';
import { useGetOrders } from '@/hooks/useGetOrders/useGetOrders';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';

export const UserOrdersContainerRaw = () => {
  const { session } = useAuthContext();
  const { data, hasNextPage, fetchNextPage, fetchPreviousPage, isFetching, refetch } = useGetOrders(session?._id);
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
    <>
      <UserOrdersForm updateFilters={setFilter} filters={restFilters} />
      <UserOrders
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
