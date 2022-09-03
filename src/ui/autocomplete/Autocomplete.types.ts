import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

export type AutocompleteProps = Pick<
  MuiAutocompleteProps<unknown, undefined, undefined, undefined>,
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
