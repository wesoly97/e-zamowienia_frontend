import { isFileArray } from './formatFormData.typeguards';

export const formatFormData = <TData>(data: TData) => {
  const formData = new FormData();

  Object.entries(data).map(([key, value]) => {
    if (isFileArray(value)) {
      value.map((file) => {
        formData.append(key, file);
      });
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};
