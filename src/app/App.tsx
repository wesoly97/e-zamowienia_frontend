import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppProviders } from '@/providers/AppProviders';
import { AppRoutes } from '@/routing/AppRoutes';

const openReactQueryDevtools = process.env.NODE_ENV === 'development';

export const App = () => (
  <AppProviders>
    <AppRoutes />
    {openReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
  </AppProviders>
);
