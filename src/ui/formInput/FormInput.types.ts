import { TextFieldProps } from '@mui/material/TextField';
import { ChangeEvent } from 'react';

export type FormInputProps = {
  handleChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => boolean;
} & Required<Pick<TextFieldProps, 'id' | 'label' | 'name'>> &
  TextFieldProps;
