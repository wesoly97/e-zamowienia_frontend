import { ThemeProvider } from 'styled-components';

import { AppProvidersProps } from './AppProviders.types';

import { theme } from '@/theme/theme';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
