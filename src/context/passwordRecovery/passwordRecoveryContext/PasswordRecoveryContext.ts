import { createContext } from 'react';

import { PasswordRecoveryContextValue } from './PasswordRecoveryContext.types';

export const PasswordRecoveryContext = createContext<PasswordRecoveryContextValue | undefined>(undefined);
