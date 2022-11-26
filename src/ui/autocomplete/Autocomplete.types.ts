import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

export type AutocompleteProps<T> = {
  options: T[];
  selectValue?: keyof T;
} & MuiAutocompleteProps<T, false, true, false> &
  Required<Pick<MuiAutocompleteProps<T, false, true, false>, 'onChange'>>;
