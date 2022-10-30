import { StyledInput } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({
  variant,
  label,
  id,
  disabled,
  helperText,
  required,
  type,
  error,
  placeholder,
  inputRef,
  inputProps,
  InputProps,
  InputLabelProps,
  classes,
  className,
  value,
  onChange,
}: InputProps) => {
  return (
    <StyledInput
      inputRef={inputRef}
      id={id}
      label={label}
      type={type}
      variant={variant}
      disabled={disabled}
      helperText={helperText}
      required={required}
      error={error}
      placeholder={placeholder}
      inputProps={inputProps}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      classes={classes}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};
