const { mergeConfig } = require('vite');
const tsconfigPaths = require('vite-tsconfig-paths');
const svgr = require('vite-plugin-svgr');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    emotionAlias: false,
  },

  async viteFinal(config, { configType }) {
    config.plugins = [
      ...config.plugins,
      svgr(),
      tsconfigPaths.default()
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };

    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
