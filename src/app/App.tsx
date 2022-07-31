import { AppProviders } from '@/providers/AppProviders';
import { AppRoutes } from '@/routing/AppRoutes';
import './App.css';

export const App = () => (
  <AppProviders>
    <AppRoutes />
  </AppProviders>
);
