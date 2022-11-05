interface ImportMetaEnv {
  readonly VITE_ENV: 'develop' | 'production';
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
