import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';

import { SelectProps } from './Select.types';

export const Select = <T,>({
  data,
  labelId,
  id,
  label,
  value,
  onChange,
  disabled,
  required,
  error,
  errorText,
}: SelectProps<T>) => {
  return (
    <FormControl disabled={disabled} required={required} error={error}>
      <InputLabel shrink id={labelId}>
        {label}
      </InputLabel>
      <MuiSelect labelId={labelId} id={id} value={value} label={label} onChange={onChange} notched displayEmpty>
        <MenuItem value={''}>Wszystko</MenuItem>
        {data.map((item, index) => (
          <MenuItem key={index} value={item as unknown as string}>
            {item as unknown as string}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};
