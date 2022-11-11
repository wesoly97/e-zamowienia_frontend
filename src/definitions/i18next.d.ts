import 'i18next';

import pl from '@/i18n/data/pl.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      global: typeof pl;
    };
  }
}
