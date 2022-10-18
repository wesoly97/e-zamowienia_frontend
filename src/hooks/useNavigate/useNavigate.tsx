import { useLocation, useNavigate as useRouterNavigate } from 'react-router-dom';

export const useNavigate = () => {
  const navigate = useRouterNavigate();
  const location = useLocation();

  return (route: string) => navigate(route, { replace: location.pathname === route });
};
