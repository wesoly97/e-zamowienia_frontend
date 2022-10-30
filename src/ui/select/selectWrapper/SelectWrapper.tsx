import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

import { SelectWrapperProps } from './SelectWrapper.types';
import { StyledFormControl } from './SelectWrapper.styles';

export const SelectWrapper = ({
  labelId,
  label,
  disabled,
  required,
  error,
  children,
  errorText,
}: SelectWrapperProps) => {
  return (
    <StyledFormControl disabled={disabled} required={required} error={error}>
      <InputLabel shrink id={labelId}>
        {label}
      </InputLabel>
      {children}
      <FormHelperText>{errorText}</FormHelperText>
    </StyledFormControl>
  );
};
