import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'light',
  },
  backgrounds: {
    default: 'light',
  },
  docs: {
    theme: themes.dark,
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  ),
];
