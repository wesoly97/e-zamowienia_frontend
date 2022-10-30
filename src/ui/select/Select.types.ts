import { SelectProps as MuiSelectProps } from '@mui/material';

export type SelectProps<T> = { data: T[]; errorText?: string } & MuiSelectProps;
