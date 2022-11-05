import { StyledPhoneInput } from './PhoneInput.styles';
import { PhoneInputProps } from './PhoneInput.types';

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
}: PhoneInputProps) => {
  return (
    <StyledPhoneInput
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
