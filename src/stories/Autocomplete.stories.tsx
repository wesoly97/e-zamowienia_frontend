import { AutocompleteRenderInputParams } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { AutocompleteProps } from '@/ui/autocomplete/Autocomplete.types';
import { Autocomplete } from '@/ui/autocomplete/Autocomplete';
import { Input } from '@/ui/input/Input';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: Story<any> = <Book,>({ ...props }: AutocompleteProps<Book>) => {
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
        id={'asd'}
          // @ts-ignore
        options={books}
        renderInput={renderInput}
        selectValue={'title'}
        value={value}
        onChange={(_, newValue) => {
          // @ts-ignore
          setValue(newValue);
        }}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
