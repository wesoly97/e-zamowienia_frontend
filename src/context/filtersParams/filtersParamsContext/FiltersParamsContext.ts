import { createContext } from 'react';

import { FiltersParamsContextValue } from './FiltersParamsContext.types';

export const FiltersParamsContext = createContext<FiltersParamsContextValue | undefined>(undefined);
