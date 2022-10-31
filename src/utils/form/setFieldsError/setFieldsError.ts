import { FieldValues, Path } from 'react-hook-form';

import { mapErrorResponseToFormErrors } from '../mapErrorResponseToFormErrors/mapErrorResponseToFormErrors';
import { iterateOverErrors } from '../iterateOverErrors/iterateOverErrors';

import { SetFieldsErrorsConfig } from './setFieldsError.types';
import { isErrorArray, isInternalServerError } from './setFieldsError.typeguards';

import {
  BadRequestError,
  ConflictError,
  ErrorArray,
  ErrorMessage,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  InternalServerError,
} from '@/api/types/types';

export const setFieldsError = <
  TFormData extends FieldValues,
  TError extends
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | NotFoundError
    | ConflictError
    | InternalServerError,
>({
  form,
  error,
  fieldToPick,
}: SetFieldsErrorsConfig<TFormData, TError>) => {
  if (!error || isInternalServerError(error as InternalServerError)) {
    return;
  }

  if (isErrorArray(error as ErrorArray)) {
    const errors = mapErrorResponseToFormErrors((error as ErrorArray).errors);
    if (!errors) {
      return;
    }

    form.clearErrors();

    iterateOverErrors(errors, (key, value) => form.setError(key as Path<TFormData>, { message: value }));

    return;
  }

  form.clearErrors();

  form.setError(fieldToPick as Path<TFormData>, error as ErrorMessage);
};
