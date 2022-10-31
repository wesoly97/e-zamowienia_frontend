import { css } from 'styled-components';
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
  typography: {
    htmlFontSize: 10,
    fontFamily: '"Open-Sans", sans-serif',
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
      0: '#CDD9E1',
    },
    LIGHT_BLUE: {
      125: '#236F9C',
      100: '#2C8BC3',
      75: '#56A2CF',
      50: '#80B9DB',
      25: '#ABD1E7',
      0: '#D5E8F3',
    },
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY: '#EDF7F5',
  },
  borderRadius: {
    small: '4px',
    medium: '10px',
    large: '20px',
  },
  boxShadow: {
    normal: '0 15px 35px 0 rgba(87, 87, 87, 0.12), 0 5px 15px 0 rgba(0, 0, 0, 0.12)',
  },
  //TODO change fontSize px->rem
  fontType: {
    h1: css`
      font-size: 60px;
      font-weight: 700;
      line-height: 1.167;
      text-transform: uppercase;
      user-select: none;
    `,
    h2: css`
      font-size: 37.5px;
      font-weight: 700;
      line-height: 1.2;
      text-transform: uppercase;
      user-select: none;
    `,
    h3: css`
      font-size: 30px;
      font-weight: 500;
      line-height: 1.167;
      text-transform: uppercase;
      user-select: none;
    `,
    h4: css`
      font-size: 21.2px;
      font-weight: 300;
      line-height: 1.235;
      user-select: none;
    `,
    body1: css`
      font-size: 10px;
      font-weight: 400;
      line-height: 1.5;
    `,
    body2: css`
      font-size: 8.75px;
      font-weight: 400;
      line-height: 1.43;
    `,
    subtitle1: css`
      font-size: 8.75px;
      font-weight: 400;
      line-height: 1.75;
    `,
    subtitle2: css`
      font-size: 8.75px;
      font-weight: 400;
      line-height: 1.57;
    `,
  },
});
