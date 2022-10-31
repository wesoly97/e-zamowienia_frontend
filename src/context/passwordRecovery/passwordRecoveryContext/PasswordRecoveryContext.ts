import { createContext } from 'react';

import { PasswordRecoveryContextValue } from './passwordRecoveryContext.types';

export const PasswordRecoveryContext = createContext<PasswordRecoveryContextValue | undefined>(undefined);
