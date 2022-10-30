import { GetSettingsResponse } from '@/api/actions/settings/settings.types';

export type SettingsContextValue = {
  settings?: GetSettingsResponse;
  isLoadingSettings: boolean;
};
