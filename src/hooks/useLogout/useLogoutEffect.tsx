import { useNavigate } from 'react-router-dom';

import { useLogout } from './useLogout';

export const useLogoutEffect = () => {
  const navigate = useNavigate();

  return useLogout({
    onSuccess: (data) => {
      // navigate(0);
    },
    onError: (error) => {
      //errory form uzywany
    },
  });
};
