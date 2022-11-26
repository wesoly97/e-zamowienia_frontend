import { isFileArray } from './formatFormData.typeguards';

export const formatFormData = <TData>(data: TData) => {
  const formData = new FormData();

  Object.entries(data as ArrayLike<unknown>).map(([key, value]) => {
    if (isFileArray(value as File[])) {
      return (value as File[]).map((file) => {
        formData.append(key, file);
      });
    }

    formData.append(key, value as string);
  });

  return formData;
};
