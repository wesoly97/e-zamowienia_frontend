import { AppProviders } from '@/providers/AppProviders';
import { AppRoutes } from '@/routing/AppRoutes';

export const App = () => (
  <AppProviders>
    <AppRoutes />
  </AppProviders>
);
