import { ReactNode } from 'react';

export type UploadButtonProps = {
  children: ReactNode;
  accept: string;
  multiple: boolean;
};
