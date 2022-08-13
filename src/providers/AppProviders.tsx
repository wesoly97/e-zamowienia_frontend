import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

import { AppProvidersProps } from './AppProviders.types';

import { ApiClientContextController } from '@/context/apiClient/apiClientContextController/ApiClientContextController';
import { theme } from '@/theme/theme';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <ApiClientContextController>
        <BrowserRouter>{children}</BrowserRouter>
      </ApiClientContextController>
    </ThemeProvider>
  </StyledEngineProvider>
);
