const xsMinWidth = 360;
const smMinWidth = 768;
const mdMinWidth = 992;
const lgMinWidth = 1200;
const xlMinWidth = 1400;

export const theme = {
  colors: {
    DARK_BLUE: {
      '125': '#063553',
      '100': '#074268',
      '75': '#396886',
      '50': '#6A8EA4',
      '25': '#9CB3C3',
    },
    LIGHT_BLUE: {
      '125': '#236F9C',
      '100': '#2C8BC3',
      '75': '#56A2CF',
      '50': '#80B9DB',
      '25': '#C0DCED',
    },
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY: '#3D3D54',
  },
  breakpoints: {
    values: {
      min: {
        xs: xsMinWidth,
        sm: smMinWidth,
        md: mdMinWidth,
        lg: lgMinWidth,
        xl: xlMinWidth,
      },
      max: {
        xs: xsMinWidth - 1,
        sm: smMinWidth - 1,
        md: mdMinWidth - 1,
        lg: lgMinWidth - 1,
        xl: xlMinWidth - 1,
      },
    },
    mq: {
      min: {
        xs: `@media (min-width: ${xsMinWidth}px)`,
        sm: `@media (min-width: ${xsMinWidth}px)`,
        md: `@media (min-width: ${xsMinWidth}px)`,
        lg: `@media (min-width: ${xsMinWidth}px)`,
        xl: `@media (min-width: ${xsMinWidth}px)`,
      },
      max: {
        xs: `@media (max-width: ${xsMinWidth - 1}px)`,
        sm: `@media (max-width: ${xsMinWidth - 1}px)`,
        md: `@media (max-width: ${xsMinWidth - 1}px)`,
        lg: `@media (max-width: ${xsMinWidth - 1}px)`,
        xl: `@media (max-width: ${xsMinWidth - 1}px)`,
      },
    },
  },
};
