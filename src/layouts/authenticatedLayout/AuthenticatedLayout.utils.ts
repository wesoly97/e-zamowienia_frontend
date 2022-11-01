import { GetSessionResponse } from '@/api/actions/session/session.types';
import { RoleTypes } from '@/api/types/types';

export const arePrivilegesSufficient = (session?: GetSessionResponse, acceptedRoles?: RoleTypes[]) => {
  if (!acceptedRoles) {
    return true;
  }

  if (session?.accountType === RoleTypes.Administrator) {
    return true;
  }

  return session && acceptedRoles && acceptedRoles.includes(session.accountType);
};
