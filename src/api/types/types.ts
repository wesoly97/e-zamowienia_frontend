export enum HTTPMethods {
  Delete = 'DELETE',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Get = 'GET',
}

export type MutationHTTPMethod = 'DELETE' | 'POST' | 'PUT' | 'PATCH';

type Error = {
  message: string;
};

//500
export type InternalServerError = Error;

//409
export type ConflictError = Error;

//404
export type NotFoundError = Error;

//401
export type UnauthorizedError = Error;

//400
export type BadRequestError = {
  error: Error[];
};

export enum RoleTypes {
  Administrator = 'administrator',
  orderer = 'orderer',
  regular = 'regular',
}
