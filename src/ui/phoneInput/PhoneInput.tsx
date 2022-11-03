import { MuiTelInput, MuiTelInputProps } from 'mui-tel-input';

export const PhoneInput = ({
  label,
  id,
  value,
  onChange,
  error,
  helperText,
  inputRef,
  disabled,
  ...props
}: MuiTelInputProps) => {
  return (
    <MuiTelInput
      value={value}
      onChange={onChange}
      defaultCountry="PL"
      preferredCountries={['PL', 'DE', 'GB', 'US']}
      langOfCountryName="pl"
      focusOnSelectCountry
      label={label}
      id={id}
      error={error}
      helperText={helperText}
      inputRef={inputRef}
      disabled={disabled}
      {...props}
    />
  );
};
