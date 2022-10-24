import { ControllerFieldState } from 'react-hook-form';

export type FileListingProps = {
  acceptedFiles: File[];
} & Pick<ControllerFieldState, 'error'>;
