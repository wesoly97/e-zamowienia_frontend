import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

export type AutocompleteProps<T> = {
  selectValue?: keyof T;
  options: T[];
} & MuiAutocompleteProps<T, false, undefined, true>;
