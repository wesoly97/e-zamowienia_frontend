import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { ApiClientContextController } from '@/context/apiClient/apiClientContextController/ApiClientContextController';
import { theme } from '@/theme/theme';
import { AuthContextController } from '@/context/auth/authContextController/AuthContextController';
import { SettingsContextController } from '@/context/settings/settingsContextController/SettingsContextController';
import { ToastContextController } from '@/context/toast/toastContextController/ToastContextController';
import { LocaleContextController } from '@/context/locale/localeContextController/LocaleContextController';
import '@/i18n';

export const AppProviders = ({ children }: { children?: ReactNode }) => (
  <LocaleContextController>
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
  </LocaleContextController>
);
