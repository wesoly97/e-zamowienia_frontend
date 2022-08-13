const { mergeConfig } = require('vite');
const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    // storyStoreV7: true,
    emotionAlias: false,
  },

  async viteFinal(config, { configType }) {
    // return {
    //   ...config,
    //   plugins: [...config.plugins, tsconfigPaths.default()],
    // };

    // config.resolve.modules = [resolve(__dirname, '@', '../src'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };

    return mergeConfig(config, {
      // resolve: path.resolve(__dirname, '../vite.config.ts'),
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
