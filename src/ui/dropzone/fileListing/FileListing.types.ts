import { ControllerFieldState } from 'react-hook-form';

import { ResponseFile } from '@/api/types/types';

export type FileListingProps = {
  fetchedFiles?: ResponseFile[];
  uploadedFiles: File[];
} & Pick<ControllerFieldState, 'error'>;
