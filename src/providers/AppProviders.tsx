import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { ApiClientContextController } from '@/context/apiClient/apiClientContextController/ApiClientContextController';
import { theme } from '@/theme/theme';
import { AuthContextController } from '@/context/auth/authContextController/AuthContextController';

export const AppProviders = ({ children }: { children?: ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <ApiClientContextController>
        <AuthContextController>
          <BrowserRouter>{children}</BrowserRouter>
        </AuthContextController>
      </ApiClientContextController>
    </ThemeProvider>
  </StyledEngineProvider>
);
