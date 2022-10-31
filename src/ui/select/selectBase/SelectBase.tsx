import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';

import { SelectBaseProps } from './SelectBase.types';

export const SelectBase = <T,>({
  data,
  labelId,
  id,
  label,
  value,
  onChange,
  fullWidth,
  defaultOption,
  classes,
  className,
}: SelectBaseProps<T>) => {
  return (
    <MuiSelect
      labelId={labelId}
      id={id}
      value={value}
      label={label}
      onChange={onChange}
      notched
      displayEmpty
      fullWidth={fullWidth}
      classes={classes}
      className={className}
    >
      {defaultOption && <MenuItem value={''}>Wszystko</MenuItem>}
      {data.map((item, index) => (
        <MenuItem key={index} value={item as unknown as string}>
          {item as unknown as string}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
