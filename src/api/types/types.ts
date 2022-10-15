export type MutationHTTPMethod = 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export type ErrorMessage = {
  message: string;
};

export type Error<TKey = string> = {
  key: TKey;
} & ErrorMessage;

//500
export type InternalServerError = unknown;

//409
export type ConflictError = ErrorMessage;

//404
export type NotFoundError = {
  errors: Error[];
};

//403
export type ForbiddenError = ErrorMessage;

//401
export type UnauthorizedError = ErrorMessage;

//400
export type BadRequestError = {
  errors: Error[];
};

export enum RoleTypes {
  Administrator = 'administrator',
  orderer = 'orderer',
  regular = 'regular',
}
