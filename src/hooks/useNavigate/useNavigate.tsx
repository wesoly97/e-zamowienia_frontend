import { useLocation, useNavigate as useRouterNavigate } from 'react-router-dom';

import { AppLinks } from '@/routing/AppRoutes.types';

export const useNavigate = () => {
  const navigate = useRouterNavigate();
  const location = useLocation();

  return (route: AppLinks) => navigate(route, { replace: location.pathname === route });
};
