export type MutationHTTPMethod = 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export type BadRequestError = {
  error: {
    path: string;
    message: string;
    details: string;
    code: string;
  };
};

export type UnauthorizedError = {
  message: string;
  details: string;
  code: string;
};
