import { StyledInput } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({
  variant,
  label,
  id,
  disabled,
  defaultValue,
  helperText,
  required,
  type,
  error,
  placeholder,
  inputRef,
  inputProps,
  InputProps,
  InputLabelProps,
}: InputProps) => {
  return (
    <StyledInput
      inputRef={inputRef}
      id={id}
      label={label}
      type={type}
      variant={variant}
      disabled={disabled}
      defaultValue={defaultValue}
      helperText={helperText}
      required={required}
      error={error}
      placeholder={placeholder}
      inputProps={inputProps}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
    />
  );
};
