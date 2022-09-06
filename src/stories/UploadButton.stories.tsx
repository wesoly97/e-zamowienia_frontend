import { Meta, Story } from '@storybook/react';

import { UploadButtonProps } from '@/ui/uploadButton/UploadButton.types';
import { UploadButton } from '@/ui/uploadButton/UploadButton';

export default {
  title: 'UploadButton',
  component: UploadButton,
} as Meta;

const Template: Story<UploadButtonProps> = ({ children, ...props }: UploadButtonProps) => (
  <UploadButton {...props}>{children}</UploadButton>
);

export const SingleFile = Template.bind({});
SingleFile.args = {
  children: 'Upload',
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  children: 'Upload',
  multiple: true,
};

export const DocsFiles = Template.bind({});
DocsFiles.args = {
  children: 'Upload',
  multiple: true,
  accept: '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
