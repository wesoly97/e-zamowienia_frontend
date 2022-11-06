import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { Toast } from '@/ui/toast/Toast';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
// @ts-ignore
import { ToastProps, ToastType } from '@/ui/toast/Toast.types';

export default {
  title: 'Toast',
  component: Toast,
} as Meta;

const Template: Story = ({ ...props }: Partial<ToastProps>) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
  };

  return (
    <>
      <PrimaryButton handleClick={handleClick}>Show toast</PrimaryButton>
      <Toast
      {...props}
      //@ts-ignore
      isOpened={isOpened}
       setIsOpened={setIsOpened}>
        Example toast
      </Toast>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Info = Template.bind({});
Info.args = {
  type: ToastType.Info,
};

export const Warning = Template.bind({});
Warning.args = {
  type: ToastType.Warning,
};

export const Error = Template.bind({});
Error.args = {
  type: ToastType.Error,
};
