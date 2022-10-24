export const isFileArray = (field: File[]): field is File[] => {
  return Array.isArray(field as File[]) && !!field.length && !!(field as File[])[0].size;
};

export const isFormData = (data: unknown): data is FormData => {
  return !!(data as FormData);
};
