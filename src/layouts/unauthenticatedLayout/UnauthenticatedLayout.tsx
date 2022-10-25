import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppRoute } from '@/routing/AppRoutes.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';

export const UnauthenticatedLayout = ({ children }: { children?: ReactNode }) => {
  const { isAuthenticated, isLoadingAccount } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(AppRoute.Main);
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated || isLoadingAccount) {
    return null;
  }

  return <>{children ? children : <Navigate to={AppRoute.Main} replace />}</>;
};
