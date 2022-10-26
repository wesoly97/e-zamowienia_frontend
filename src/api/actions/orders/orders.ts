import { AddOrdersMutationFn, EditOrdersMutationFn, GetOrdersInfiniteQueryFn } from './orders.types';

export const getOrdersQueryKey = 'orders';

export const getInfiniteOrdersQuery: GetOrdersInfiniteQueryFn = (args) => {
  return {
    endpoint: getOrdersQueryKey,
    args,
  };
};

export const getOrdersDetailsQueryKey = 'orders/:orderId';

export const addOrdersQueryKey = 'orders';

export const addOrdersMutationFn: AddOrdersMutationFn = (params) => ({
  endpoint: addOrdersQueryKey,
  method: 'POST',
  params,
});

export const editOrdersQueryKey = 'orders';

export const editOrdersMutationFn: (orderId: string) => EditOrdersMutationFn = (id) => (params) => ({
  endpoint: `${editOrdersQueryKey}/${id}`,
  method: 'PATCH',
  params,
});
