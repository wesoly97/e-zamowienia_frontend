import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';

import { InputProps } from '@/ui/input/Input.types';
import { Input } from '@/ui/input/Input';

const Container = styled.div`
  & > div {
    margin: 10px;
  }
`;

export default {
  title: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: Story<InputProps> = ({ ...props }: InputProps) => {
  const [value, setValue] = useState<string | number>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Input {...props} value={value} onChange={handleChange} variant={'standard'} />
      <Input {...props} value={value} onChange={handleChange} variant={'outlined'} />
      <Input {...props} value={value} onChange={handleChange} variant={'filled'} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  id: 'name',
  label: 'Name',
  error: true,
};

export const ErrorWithText = Template.bind({});
ErrorWithText.args = {
  id: 'name',
  label: 'Name',
  error: true,
  helperText: 'Wrong name',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
};

export const Labeled = Template.bind({});
Labeled.args = {
  id: 'name',
  label: 'Name',
};

export const Required = Template.bind({});
Required.args = {
  id: 'name',
  label: 'Name',
  required: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  id: 'name',
  label: 'Name',
  helperText: 'Strange input',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledWithLabel = Template.bind({});
DisabledWithLabel.args = {
  id: 'name',
  label: 'Name',
  disabled: true,
};

export const DisabledWithHelperText = Template.bind({});
DisabledWithHelperText.args = {
  disabled: true,
  helperText: 'Strange input',
};
