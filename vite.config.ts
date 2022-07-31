// https://vitejs.dev/config/

import { configDefaults, defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  plugins: [react(), tsconfigPaths(), svgr()],
  build: {
    target: 'esnext',
  },
  test: {
    exclude: [...configDefaults.exclude, 'test/e2e/**/*'],
  },
});
