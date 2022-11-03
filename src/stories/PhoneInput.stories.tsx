import { Meta, Story } from '@storybook/react';

import { PhoneInput } from '@/ui/phoneInput/PhoneInput';

export default {
  title: 'PhoneInput',
  component: PhoneInput,
} as Meta;

const Template: Story = () => <PhoneInput />;

export const Default = Template.bind({});
Default.args = {};
