import { StyledPhoneInput } from './PhoneInput.styles';
import { PhoneInputProps } from './PhoneInput.types';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

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
  const { locale } = useLocaleContext();

  return (
    <StyledPhoneInput
      value={value}
      onChange={onChange}
      defaultCountry={'PL'}
      preferredCountries={['PL', 'DE', 'GB', 'US']}
      langOfCountryName={locale}
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
