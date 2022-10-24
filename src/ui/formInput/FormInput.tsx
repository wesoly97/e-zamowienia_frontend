import { Controller, useFormContext } from 'react-hook-form';

import { StyledInput } from '../input/Input.styles';

import { FormInputProps } from './FormInput.types';

export const FormInput = ({
  label,
  name,
  type,
  inputProps,
  InputProps,
  InputLabelProps,
  handleChange,
  multiline,
  maxRows,
  rows,
}: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange: handleFieldChange, ...restField }, fieldState: { error } }) => {
        return (
          <StyledInput
            type={type}
            label={label}
            error={!!error}
            helperText={<>{error?.message}</>}
            inputProps={inputProps}
            InputProps={InputProps}
            InputLabelProps={InputLabelProps}
            {...restField}
            onChange={(event) => {
              if (!!handleChange && handleChange(event)) {
                handleFieldChange(event);
              }

              if (!handleChange) {
                handleFieldChange(event);
              }
            }}
            multiline={multiline}
            maxRows={maxRows}
            rows={rows}
          />
        );
      }}
    />
  );
};
