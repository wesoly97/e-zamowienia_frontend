import { useQueryClient } from '@tanstack/react-query';

import { useLogout } from './useLogout';

import { getSessionQueryKey } from '@/api/actions/session/session';

export const useLogoutEffect = () => {
  const queryClient = useQueryClient();

  return useLogout({
    onSuccess: () => {
      queryClient.invalidateQueries([getSessionQueryKey]);
    },
  });
};
