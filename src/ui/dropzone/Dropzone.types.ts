import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { DropzoneProps as ReactDropzoneProps } from 'react-dropzone';

import { ResponseFile } from '@/api/types/types';

export type DropzoneProps = {
  fetchedFiles?: ResponseFile[];
  uploadedFiles: File[];
} & Pick<ControllerFieldState, 'error'> &
  Pick<ControllerRenderProps, 'onBlur' | 'onChange'> &
  Pick<ReactDropzoneProps, 'onDrop'>;

type Accept = {
  [key: string]: string[];
};

export type Config = {
  accept: Accept;
  maxFiles: number;
  maxSize: number;
  noClick: boolean;
  noKeyboard: boolean;
};
