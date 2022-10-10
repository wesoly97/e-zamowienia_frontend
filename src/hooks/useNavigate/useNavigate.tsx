import { useLocation, useNavigate as useRouterNavigate } from 'react-router-dom';

import { AppRoute } from '@/routing/AppRoutes.types';

export const useNavigate = () => {
  const navigate = useRouterNavigate();
  const location = useLocation();

  return (route: AppRoute) => navigate(route, { replace: location.pathname === route });
};
