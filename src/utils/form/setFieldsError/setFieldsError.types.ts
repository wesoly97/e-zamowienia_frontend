import { FieldValues, UseFormReturn } from 'react-hook-form';

import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from '@/api/types/types';

export type SetFieldsErrorsConfig<
  TFormData extends FieldValues,
  TError extends
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | NotFoundError
    | ConflictError
    | InternalServerError,
> = {
  form: UseFormReturn<TFormData>;
  error?: TError;
  fieldToPick?: string;
};
