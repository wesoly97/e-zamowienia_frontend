import { Dispatch, SetStateAction } from 'react';

export type PasswordRecoveryContextValue = {
  isTokenExpired: boolean;
  setIsTokenExpired: Dispatch<SetStateAction<boolean>>;
  setTokenExpirationDate: Dispatch<SetStateAction<number>>;
};
