import { BadRequestError, NotFoundError } from '@/api/types/types';

export const mapErrorResponseToFormErrors = <TError extends BadRequestError | NotFoundError>(
  errors: TError['errors'] | undefined,
): Partial<Record<string, string>> | null => {
  if (!errors) {
    return null;
  }

  const errorsMessages = errors.reduce((acc, curr) => {
    acc[curr.key] = curr.message;

    return acc;
  }, {} as Record<string, string>);

  return errorsMessages;
};
