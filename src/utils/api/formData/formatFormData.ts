import { isFileArray } from './formatFormData.typeguards';

export const formatFormData = <TData>(data: TData) => {
  const formData = new FormData();

  // @ts-ignore
  Object.entries(data).map(([key, value]) => {
    // @ts-ignore
    if (isFileArray(value)) {
      value.map((file) => {
        formData.append(key, file);
      });
    } else {
      // @ts-ignore
      formData.append(key, value);
    }
  });

  return formData;
};
