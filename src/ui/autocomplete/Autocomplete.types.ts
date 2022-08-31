import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

type InputProps = {
  value?: unknown;
  optionProp?: string;
};

export type AutocompleteProps = Pick<
  MuiAutocompleteProps<unknown, true, true, true>,
  'renderInput' | 'options' | 'id' | 'getOptionLabel'
  // | 'clearText'
  // | 'groupBy'
  // | 'onChange'
  // | 'getOptionDisabled'
  // | 'multiple'
  // | 'limitTags'
> &
  InputProps;
