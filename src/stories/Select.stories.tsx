import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import styled from 'styled-components';

import { SelectProps } from '@/ui/select/Select.types';
import { Select } from '@/ui/select/Select';

const Container = styled.div`
  & > div {
    width: 100%;
  }
`;

export default {
  title: 'Select',
  component: Select,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const data = ['dog', 'cat', 'parrot', 'pig'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: Story<any> = <T,>({ ...props }: SelectProps<T>) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return <Select {...props} onChange={() => handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
  data: data,
  id: 'example-id',
  labelId: 'label-id',
  label: 'Example',
};
