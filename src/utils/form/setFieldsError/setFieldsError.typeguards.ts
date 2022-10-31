import { ErrorArray, InternalServerError } from '@/api/types/types';

export const isErrorArray = (error: ErrorArray): error is ErrorArray => {
  return !!(error as ErrorArray).errors;
};

export const isInternalServerError = (error: InternalServerError): error is InternalServerError => {
  return !!(error as InternalServerError)._message;
};
