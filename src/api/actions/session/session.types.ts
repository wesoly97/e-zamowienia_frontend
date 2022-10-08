import { BadRequestError, UnauthorizedError } from '../../types/types';

export enum RoleTypes {
  Administrator = 'administrator',
  orderer = 'orderer',
  regular = 'regular',
}

export type GetSessionResponse = {
  _id: string;
  role: RoleTypes;
};

export type GetSessionError = BadRequestError | UnauthorizedError;
