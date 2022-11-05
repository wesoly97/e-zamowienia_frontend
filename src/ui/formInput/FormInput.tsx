import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input } from '../input/Input';

import { FormInputProps } from './FormInput.types';

export const FormInput = ({
  id,
  label,
  name,
  type,
  disabled,
  inputProps,
  InputProps,
  InputLabelProps,
  handleChange,
  multiline,
  maxRows,
  rows,
  variant,
  className,
  classes,
  focused,
  required,
}: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange: handleFieldChange, ref, ...restField }, fieldState: { error } }) => {
        const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          if ((!!handleChange && handleChange(event)) || !handleChange) {
            handleFieldChange(event);
          }
        };

        return (
          <Input
            id={id}
            label={label}
            error={!!error}
            disabled={disabled}
            helperText={<>{error?.message}</>}
            inputProps={inputProps}
            InputProps={InputProps}
            InputLabelProps={InputLabelProps}
            onChange={onChange}
            multiline={multiline}
            maxRows={maxRows}
            rows={rows}
            variant={variant}
            className={className}
            classes={classes}
            focused={focused}
            required={required}
            inputRef={ref}
            {...(type ? { type } : { type: 'text' })}
            {...restField}
          />
        );
      }}
    />
  );
};
