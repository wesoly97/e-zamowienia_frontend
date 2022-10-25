import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppLinks } from '@/routing/AppRoutes.types';
import { RoleTypes } from '@/api/types/types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';

export const AuthenticatedLayout = ({ children, role }: { children?: ReactNode; role?: RoleTypes }) => {
  const { isUnauthenticated, isLoadingAccount } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isUnauthenticated) {
      navigate(AppLinks.Login);
    }
  }, [isUnauthenticated, navigate]);

  if (isUnauthenticated || isLoadingAccount) {
    return null;
  }

  return <>{children ? children : <Navigate to={AppLinks.Login} replace />}</>;
};
