/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { Theme } from '@/theme/theme.types';

// declare module '@mui/material/styles' {
//   interface Theme {
//     kupa: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     kupa?: {
//       danger?: string;
//     };
//   }
// }

// interface CustomTheme {
//   bg: {
//     main: string;
//     light: string;
//   };
//   text: {
//     main: string;
//     light: string;
//   };
// }

// declare module '@mui/material/styles' {
//   interface Theme extends CustomTheme {}
//   interface ThemeOptions extends CustomTheme {}
// }

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
