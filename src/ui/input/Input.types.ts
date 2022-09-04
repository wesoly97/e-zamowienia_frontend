import { TextFieldProps } from '@mui/material';

export type InputProps = Pick<
  TextFieldProps,
  | 'variant'
  | 'label'
  | 'id'
  | 'disabled'
  | 'defaultValue'
  | 'helperText'
  | 'type'
  | 'required'
  | 'error'
  | 'placeholder'
  | 'inputRef'
  | 'inputProps'
  | 'InputProps'
  | 'InputLabelProps'
>;
