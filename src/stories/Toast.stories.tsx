import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { Toast } from '@/ui/toast/Toast';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { ToastProps } from '@/ui/toast/Toast.types';

export default {
  title: 'Toast',
  component: Toast,
} as Meta;

const Template: Story<Partial<ToastProps>> = ({ ...props }: Partial<ToastProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
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
  type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
};
