interface ImportMetaEnv {
  readonly VITE_ENV: 'develop' | 'production';
  readonly VITE_API_URL: string;
  readonly VITE_DEFAULT_LOCALE: 'pl' | 'en';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
