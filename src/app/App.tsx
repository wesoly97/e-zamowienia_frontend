import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppProviders } from '@/providers/AppProviders';
import { AppRoutes } from '@/routing/AppRoutes';

export const App = () => (
  <AppProviders>
    <AppRoutes />
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
  </AppProviders>
);
