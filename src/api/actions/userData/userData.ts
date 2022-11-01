import { EditUserDataMutationFn } from './userData.types';

export const editUserDataQueryKey = 'users';

export const editUserDataMutationFn: (userId: string) => EditUserDataMutationFn = (id) => (params) => ({
  endpoint: `${editUserDataQueryKey}/${id}`,
  method: 'PATCH',
  params,
});
