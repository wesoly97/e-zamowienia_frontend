import { createContext } from 'react';

import { ParamsContextValue } from './ParamsContext.types';

export const ParamsContext = createContext<ParamsContextValue | undefined>(undefined);
