import { RegisterMutationFn } from './register.types';

export const registerKey = 'users';

export const registerMutationFn: RegisterMutationFn = (params) => ({
  endpoint: registerKey,
  method: 'POST',
  params,
});
