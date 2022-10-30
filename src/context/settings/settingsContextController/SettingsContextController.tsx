import { useMemo } from 'react';

import { useGetSettings } from '../hooks/useGetSettings';
import { SettingsContext } from '../settingsContext/SettingsContext';
import { SettingsContextValue } from '../settingsContext/SettingsContext.types';

import { SettingsContextControllerProps } from './SettingsContextController.types';

export const SettingsContextController = ({ children }: SettingsContextControllerProps) => {
  const { data: settings, isLoading: isLoadingSettings } = useGetSettings();

  const value = useMemo<SettingsContextValue>(
    () => ({
      settings,
      isLoadingSettings,
    }),
    [isLoadingSettings, settings],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};
