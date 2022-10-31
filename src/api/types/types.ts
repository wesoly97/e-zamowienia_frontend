export type MutationHTTPMethod = 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export type ErrorMessage = {
  message: string;
};

export type Error<TKey = string> = {
  key: TKey;
} & ErrorMessage;

export type ErrorArray = {
  errors: Error[];
};

//500
export type InternalServerError = {
  errors: {
    mode: {
      name: string;
      message: string;
      properties: {
        message: string;
        type: string;
        path: string;
        value: string;
      };
      kind: string;
      path: string;
      value: string;
    };
  };
  _message: string;
  name: string;
  message: string;
};

//409
export type ConflictError = ErrorMessage;

//404
export type NotFoundError = ErrorArray;

//403
export type ForbiddenError = ErrorMessage;

//401
export type UnauthorizedError = ErrorMessage;

//400
export type BadRequestError = ErrorArray;

export enum RoleTypes {
  Administrator = 'administrator',
  Orderer = 'orderer',
  Regular = 'regular',
}

export type ResponseFile = {
  url: string;
  fileName: string;
  key: string;
};
