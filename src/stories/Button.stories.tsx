import { Meta, Story } from '@storybook/react';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import styled from 'styled-components';

import { Button } from '../ui/button/Button';
import { PrimaryButton } from '../ui/button/PrimaryButton';
import { SecondaryButton } from '../ui/button/SecondaryButton';

import { ButtonProps } from '@/ui/button/Button.types';

const Container = styled.div`
  & > button {
    margin: 10px;
  }
`;

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...props }: ButtonProps) => (
  <>
    <Button {...props}>{children}</Button>
    <PrimaryButton {...props}>{children}</PrimaryButton>
    <SecondaryButton {...props}>{children}</SecondaryButton>
  </>
);

export const Example = Template.bind({});
Example.args = {
  children: 'Default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Default',
  disabled: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: 'Default',
  startIcon: <AccessAlarm />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: 'Default',
  endIcon: <ThreeDRotation />,
};
