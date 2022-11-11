import { createContext } from 'react';

import { LocaleContextValue } from './LocaleContext.types';

export const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);
