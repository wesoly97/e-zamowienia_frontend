import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthenticatedLayoutProps } from './AuthenticatedLayout.types';
import { arePrivilegesSufficient } from './AuthenticatedLayout.utils';

import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppLinks } from '@/routing/AppRoutes.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';

export const AuthenticatedLayout = ({ children, acceptedRoles }: AuthenticatedLayoutProps) => {
  const { isUnauthenticated, isLoadingAccount, session } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isUnauthenticated || !arePrivilegesSufficient(session, acceptedRoles)) {
      navigate(AppLinks.Login);
    }
  }, [acceptedRoles, isUnauthenticated, navigate, session]);

  if (isUnauthenticated || !arePrivilegesSufficient(session, acceptedRoles) || isLoadingAccount) {
    return null;
  }

  return <>{children ? children : <Navigate to={AppLinks.Login} replace />}</>;
};
