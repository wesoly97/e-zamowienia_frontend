/// <reference types="vite-plugin-svgr/client" />
import type { UserConfig as VitestUserConfig } from 'vitest/config';

declare module 'vite' {
  export interface UserConfig {
    test?: VitestUserConfig['test'];
  }
}
