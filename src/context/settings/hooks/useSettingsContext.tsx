import { useContext } from 'react';

import { SettingsContext } from '../settingsContext/SettingsContext';

export const useSettingsContext = () => {
  const ctx = useContext(SettingsContext);

  if (!ctx) {
    throw new Error(
      'useSettingsContext hook is not wrapped by SettingsContextController provider or Context value is not provided',
    );
  }

  return ctx;
};
