export const iterateOverErrors = <TFormData extends Record<string, unknown>>(
  errors: Partial<Record<keyof TFormData, string>>,
  callback: (key: keyof TFormData, value: string | undefined) => void,
) => Object.keys(errors).forEach((name) => callback(name as keyof TFormData, errors[name as keyof TFormData]));
