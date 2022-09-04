import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

export type AutocompleteProps = Pick<
  MuiAutocompleteProps<unknown, false, undefined, true>,
  | 'renderInput'
  | 'options'
  | 'id'
  | 'getOptionLabel'
  | 'value'
  | 'isOptionEqualToValue'
  | 'clearText'
  | 'groupBy'
  | 'onChange'
  | 'getOptionDisabled'
>;
