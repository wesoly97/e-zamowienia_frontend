import { Meta, Story } from '@storybook/react';

import { Button } from '../ui/button/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story = () => <Button>asd</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
