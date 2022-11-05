import { GetSessionResponse } from '@/api/actions/session/session.types';
import { RoleTypes } from '@/api/types/types';

export const isUserVerified = (accountType?: GetSessionResponse['accountType']) =>
  [RoleTypes.Administrator, RoleTypes.Orderer].some((requiredAccountType) => requiredAccountType === accountType);

export const isUserRegular = (accountType?: GetSessionResponse['accountType']) => RoleTypes.Regular === accountType;
