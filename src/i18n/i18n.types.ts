import { Namespace } from 'i18next';
import { UseTranslationResponse } from 'react-i18next';

export enum AppLocale {
  Pl = 'pl',
  En = 'en',
}

export type TranslationFunction = UseTranslationResponse<Namespace>['t'];
