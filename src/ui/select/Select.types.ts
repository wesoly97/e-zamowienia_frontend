import { SelectProps as MuiSelectProps } from '@mui/material/Select';

export type SelectProps<T> = { data: T[]; errorText?: string } & MuiSelectProps;
