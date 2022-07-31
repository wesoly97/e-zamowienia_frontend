import { AppProviders } from '@/providers/AppProviders';
import './App.css';

export const App = () => (
  <AppProviders>
    <AppRouter />
  </AppProviders>
);
