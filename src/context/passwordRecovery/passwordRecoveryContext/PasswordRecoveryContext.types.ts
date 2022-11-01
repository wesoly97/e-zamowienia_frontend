import { Dispatch, SetStateAction } from 'react';

export type PasswordRecoveryContextValue = {
  tokenExpirationDate: number;
  setTokenExpirationDate: Dispatch<SetStateAction<number>>;
};
