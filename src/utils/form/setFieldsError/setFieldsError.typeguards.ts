import { NotFoundError, BadRequestError } from '@/api/types/types';

export const isNotFoundError = (error: NotFoundError): error is NotFoundError => {
  return !!(error as NotFoundError).errors;
};

export const isBadRequestError = (error: BadRequestError): error is BadRequestError => {
  return !!(error as BadRequestError).errors;
};
