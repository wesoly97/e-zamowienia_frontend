import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

export type AutocompleteProps<T> = {
  selectValue: T;
  options: T[];
} & MuiAutocompleteProps<unknown, false, undefined, true>;
