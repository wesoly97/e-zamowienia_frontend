import { GetSessionResponse } from '@/api/actions/session/session.types';
import { RoleTypes } from '@/api/types/types';

export const isUserVerified = (session?: GetSessionResponse) =>
  session && [RoleTypes.Administrator, RoleTypes.Orderer].includes(session?.accountType);
