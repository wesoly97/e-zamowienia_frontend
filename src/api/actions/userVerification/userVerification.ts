import { UserVerificationMutationFn } from './userVerification.types';

export const userVerificationQueryKey = 'users/verify';

export const userVerificationMutationFn: UserVerificationMutationFn = (params) => ({
  endpoint: userVerificationQueryKey,
  method: 'POST',
  params,
});
