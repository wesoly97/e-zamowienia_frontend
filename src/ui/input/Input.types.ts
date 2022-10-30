import { TextFieldProps } from '@mui/material';

export type InputProps = Pick<
  TextFieldProps,
  | 'variant'
  | 'label'
  | 'id'
  | 'disabled'
  | 'helperText'
  | 'type'
  | 'required'
  | 'error'
  | 'placeholder'
  | 'inputRef'
  | 'inputProps'
  | 'InputProps'
  | 'InputLabelProps'
  | 'classes'
  | 'className'
  | 'value'
  | 'onChange'
>;
