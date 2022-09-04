import { AutocompleteRenderInputParams, AutocompleteValue, TextField } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { Autocomplete } from '../ui/autocomplete/Autocomplete';
import { AutocompleteProps } from '../ui/autocomplete/Autocomplete.types';
import { Input } from '../ui/input/Input';

export default {
  title: 'Autocomplete',
  component: Autocomplete,
} as Meta;

type Book = {
  title: string;
  price: number;
};

const books: Book[] = [
  {
    title: 'asdd asd',
    price: 12,
  },
  {
    title: 'zxc a515sd',
    price: 23,
  },
  {
    title: 'mmbmssdd',
    price: 111,
  },
  {
    title: 'xcv 5436',
    price: 42,
  },
];

const Template: Story<AutocompleteProps> = ({ ...props }: AutocompleteProps) => {
  const [value, setValue] = useState(books[0]);

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <Input
      {...params}
      label="Example"
      inputProps={{
        ...params.inputProps,
      }}
    />
  );
  return (
    <>
      <Autocomplete
        {...props}
        options={books}
        renderInput={renderInput}
        getOptionLabel={(book) => (book as Book).title}
        isOptionEqualToValue={(option, value) => (option as Book).title === (value as Book).title}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue as Book);
        }}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
