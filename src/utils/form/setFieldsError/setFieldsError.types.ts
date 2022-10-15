import { FieldValues, UseFormReturn } from 'react-hook-form';

import { BadRequestError, ConflictError, ForbiddenError, NotFoundError, UnauthorizedError } from '@/api/types/types';

export type SetFieldsErrorsConfig<
  TFormData extends FieldValues,
  TError extends BadRequestError | UnauthorizedError | ForbiddenError | NotFoundError | ConflictError,
> = {
  form: UseFormReturn<TFormData>;
  error: TError;
  fieldToPick?: string;
};
