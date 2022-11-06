import { createContext } from 'react';

import { ToastContextValue } from './ToastContext.types';

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);
