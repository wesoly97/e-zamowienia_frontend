import { LoginMutationFn } from './authentication.types';

export const loginKey = 'users/login';

export const loginMutationFn: LoginMutationFn = (params) => ({
  endpoint: loginKey,
  method: 'POST',
  params,
});
