import { useFormContext } from 'react-hook-form';

import { StyledInput } from '../Input.styles';

import { FormInputProps } from './FormInput.types';

export const FormInput = ({ label, name, type }: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <StyledInput
      type={type}
      label={label}
      error={!!errors[name]}
      helperText={<>{errors[name]?.message}</>}
      {...register(name)}
    />
  );
};
