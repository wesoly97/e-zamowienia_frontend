import { GetSessionResponse } from '@/api/actions/session/session.types';

export type AuthContextValue = {
  session?: GetSessionResponse;
  isLoadingAccount: boolean;
  isErrorAccount: boolean;
};
