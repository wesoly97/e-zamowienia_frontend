import { createContext } from 'react';

import { QueryParamsContextState } from './QueryParamsContext.types';

export const QueryParamsContext = createContext<QueryParamsContextState | undefined>(undefined);
