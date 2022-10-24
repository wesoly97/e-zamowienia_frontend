import { TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';

export type FormInputProps = {
  handleChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => boolean;
} & Required<Pick<TextFieldProps, 'label' | 'name'>> &
  Pick<TextFieldProps, 'inputProps' | 'InputProps' | 'InputLabelProps' | 'type' | 'multiline' | 'maxRows' | 'rows'>;
