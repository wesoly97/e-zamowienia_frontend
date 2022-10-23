import { AddOrdersMutationFn, GetOrdersInfiniteQueryFn } from './orders.types';

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
