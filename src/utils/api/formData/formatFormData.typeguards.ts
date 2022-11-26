export const isFileArray = (field: File[]): field is File[] => {
  return Array.isArray(field) && !!field.length && !!field[0].size;
};

export const isFormData = (data: unknown): data is FormData => {
  return (data as FormData) instanceof FormData;
};
