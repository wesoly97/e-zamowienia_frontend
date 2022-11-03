import { Controller, useFormContext } from 'react-hook-form';

import { PhoneInput } from '../phoneInput/PhoneInput';

import { FormPhoneInputProps } from './FormPhoneInput.types';

export const FormPhoneInput = ({ name, label, id, disabled }: FormPhoneInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...restField }, fieldState: { error } }) => {
        return (
          <PhoneInput
            {...restField}
            id={id}
            label={label}
            inputRef={ref}
            error={!!error}
            helperText={<>{error?.message}</>}
            disabled={disabled}
          />
        );
      }}
    />
  );
};
