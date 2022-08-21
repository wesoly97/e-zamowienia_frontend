import { createTheme } from '@mui/material/styles';

const xsMinWidth = 360;
const smMinWidth = 768;
const mdMinWidth = 992;
const lgMinWidth = 1200;
const xlMinWidth = 1400;

const defaultMuiTheme = {
  breakpoints: {
    values: {
      xl: xlMinWidth,
      lg: lgMinWidth,
      md: mdMinWidth,
      sm: smMinWidth,
      xs: xsMinWidth,
    },
    step: 100,
  },
};

export const theme = createTheme({
  ...defaultMuiTheme,
  colors: {
    DARK_BLUE: {
      125: '#063553',
      100: '#074268',
      75: '#396886',
      50: '#6A8EA4',
      25: '#9CB3C3',
    },
    LIGHT_BLUE: {
      125: '#236F9C',
      100: '#2C8BC3',
      75: '#56A2CF',
      50: '#80B9DB',
      25: '#C0DCED',
    },
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY: '#3D3D54',
  },
  borderRadius: {
    small: '4px',
    medium: '10px',
    large: '20px',
  },
  mediaQuery: {
    min: {
      xs: `@media (min-width: ${xsMinWidth}px)`,
      sm: `@media (min-width: ${smMinWidth}px)`,
      md: `@media (min-width: ${mdMinWidth}px)`,
      lg: `@media (min-width: ${lgMinWidth}px)`,
      xl: `@media (min-width: ${xlMinWidth}px)`,
    },
    max: {
      xs: `@media (max-width: ${xsMinWidth - 1}px)`,
      sm: `@media (max-width: ${smMinWidth - 1}px)`,
      md: `@media (max-width: ${mdMinWidth - 1}px)`,
      lg: `@media (max-width: ${lgMinWidth - 1}px)`,
      xl: `@media (max-width: ${xlMinWidth - 1}px)`,
    },
  },
});
