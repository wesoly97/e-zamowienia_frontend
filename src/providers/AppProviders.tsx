import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { AppProvidersProps } from './AppProviders.types';

import { theme } from '@/theme/theme';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);
