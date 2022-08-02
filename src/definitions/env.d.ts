interface ImportMetaEnv {
  readonly VITE_ENV: 'localhost' | 'develop' | 'test';
  readonly VITE_API_URL: string;
  readonly VITE_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
