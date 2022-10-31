import { PasswordRecoveryMutationFn } from './passwordRecovery.types';

export const passwordRecoveryQueryKey = 'users/password';

export const passwordRecoveryMutationFn: PasswordRecoveryMutationFn = (params) => ({
  endpoint: passwordRecoveryQueryKey,
  method: 'DELETE',
  params,
});
