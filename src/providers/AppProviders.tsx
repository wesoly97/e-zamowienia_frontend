import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { ApiClientContextController } from '@/context/apiClient/apiClientContextController/ApiClientContextController';
import { theme } from '@/theme/theme';
import { AuthContextController } from '@/context/auth/authContextController/AuthContextController';
import { SettingsContextController } from '@/context/settings/settingsContextController/SettingsContextController';
import { ToastContextController } from '@/context/toast/toastContextController/ToastContextController';

export const AppProviders = ({ children }: { children?: ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <ApiClientContextController>
        <SettingsContextController>
          <AuthContextController>
            <ToastContextController>
              <BrowserRouter>{children}</BrowserRouter>
            </ToastContextController>
          </AuthContextController>
        </SettingsContextController>
      </ApiClientContextController>
    </ThemeProvider>
  </StyledEngineProvider>
);
