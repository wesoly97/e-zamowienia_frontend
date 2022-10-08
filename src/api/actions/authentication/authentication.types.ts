import { UnauthorizedError, InternalServerError } from '@/api/types/types';

export enum RoleTypes {
  Administrator = 'administrator',
  orderer = 'orderer',
  regular = 'regular',
}

export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LoginResponse = {
  _id: string;
  role: RoleTypes;
};

export type LoginError = UnauthorizedError | InternalServerError;
