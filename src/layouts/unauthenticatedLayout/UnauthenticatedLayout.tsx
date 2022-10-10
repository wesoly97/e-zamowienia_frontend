import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppRoute } from '@/routing/AppRoutes.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';

export const UnauthenticatedLayout = ({ children }: { children?: ReactNode }) => {
  const { session, isLoadingAccount } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!session) {
      navigate(AppRoute.Main);
    }
  }, [navigate, session]);

  if (isLoadingAccount || !!session) {
    return null;
  }

  return <>{children ? children : <Navigate to={AppRoute.Main} replace />}</>;
};
