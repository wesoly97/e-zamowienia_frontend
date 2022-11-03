import { GetSessionResponse } from '@/api/actions/session/session.types';

export type AuthContextValue = {
  session?: GetSessionResponse;
  isAccountError: boolean;
  isAuthenticated: boolean;
  isUnauthenticated: boolean;
};
