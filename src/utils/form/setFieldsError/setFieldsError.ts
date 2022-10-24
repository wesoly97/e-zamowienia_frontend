import { FieldValues, Path } from 'react-hook-form';

import { mapErrorResponseToFormErrors } from '../mapErrorResponseToFormErrors/mapErrorResponseToFormErrors';
import { iterateOverErrors } from '../iterateOverErrors/iterateOverErrors';

import { SetFieldsErrorsConfig } from './setFieldsError.types';
import { isBadRequestError, isNotFoundError } from './setFieldsError.typeguards';

import {
  BadRequestError,
  ConflictError,
  ErrorMessage,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from '@/api/types/types';

export const setFieldsError = <
  TFormData extends FieldValues,
  TError extends BadRequestError | UnauthorizedError | ForbiddenError | NotFoundError | ConflictError,
>({
  form,
  error,
  fieldToPick,
}: SetFieldsErrorsConfig<TFormData, TError>) => {
  if (!error) {
    return;
  }

  if (isNotFoundError(error as NotFoundError) || isBadRequestError(error as BadRequestError)) {
    const errors = mapErrorResponseToFormErrors((error as NotFoundError | BadRequestError).errors);

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
