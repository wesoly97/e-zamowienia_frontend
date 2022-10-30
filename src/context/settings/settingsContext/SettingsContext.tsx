import { createContext } from 'react';

import { SettingsContextValue } from './SettingsContext.types';

export const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);
