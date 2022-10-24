import { DropzoneProps as ReactDropzoneProps } from 'react-dropzone';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

export type DropzoneProps = Pick<ControllerFieldState, 'error'> &
  Pick<ControllerRenderProps, 'onBlur' | 'onChange'> &
  Pick<ReactDropzoneProps, 'onDrop'>;
