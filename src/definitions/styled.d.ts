/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { Theme } from '@mui/material/styles';

import { CustomTheme } from '@/theme/theme.types';

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
