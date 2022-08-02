import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { AppProvidersProps } from './AppProviders.types';

import { theme } from '@/theme/theme';
import { ApiClientContextController } from '@/context/apiClient/apiClientContextController/ApiClientContextController';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <ApiClientContextController>
      <BrowserRouter>{children}</BrowserRouter>
    </ApiClientContextController>
  </ThemeProvider>
);
