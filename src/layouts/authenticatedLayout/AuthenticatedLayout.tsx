import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppRoute } from '@/routing/AppRoutes.types';
import { RoleTypes } from '@/api/types/types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';

export const AuthenticatedLayout = ({ children, role }: { children?: ReactNode; role?: RoleTypes }) => {
  const { isLoadingAccount, isAccountError } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAccountError) {
      navigate(AppRoute.Login);
    }
  }, [isAccountError, navigate]);

  if (isLoadingAccount || isAccountError) {
    return null;
  }

  return <>{children ? children : <Navigate to={AppRoute.Login} replace />}</>;
};
