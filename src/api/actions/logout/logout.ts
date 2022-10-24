import { LogoutMutationFn } from './logout.types';

export const logoutKey = 'users/logout';

export const logoutMutationFn: LogoutMutationFn = (params) => ({
  endpoint: logoutKey,
  method: 'POST',
  params,
});
