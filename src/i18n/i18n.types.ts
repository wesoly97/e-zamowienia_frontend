import { Namespace } from 'i18next';
import { UseTranslationResponse } from 'react-i18next';

export enum AppLocale {
  Pl = 'pl',
  En = 'en',
}

export enum CookieLocale {
  Pl = 'pl_PL',
  En = 'en_GB',
}

export type TranslationFunction = UseTranslationResponse<Namespace>['t'];
