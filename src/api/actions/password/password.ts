import { PasswordChangeMutationFn, PasswordRecoveryMutationFn, PasswordResetMutationFn } from './password.types';

export const passwordRecoveryQueryKey = 'users/password';

export const passwordRecoveryMutationFn: PasswordRecoveryMutationFn = (params) => ({
  endpoint: passwordRecoveryQueryKey,
  method: 'DELETE',
  params,
});

export const passwordResetQueryKey = 'users/password';

export const passwordResetMutationFn: PasswordResetMutationFn = (params) => ({
  endpoint: passwordResetQueryKey,
  method: 'POST',
  params,
});

export const passwordChangeQueryKey = 'users/password';

export const passwordChangeMutationFn: PasswordChangeMutationFn = (params) => ({
  endpoint: passwordChangeQueryKey,
  method: 'PATCH',
  params,
});
