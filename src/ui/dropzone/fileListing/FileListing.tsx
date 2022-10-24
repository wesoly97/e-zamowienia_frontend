import { FileWithPath } from 'react-dropzone';

import { AcceptedFiles, ErrorMessage } from './FileListing.styles';
import { FileListingProps } from './FileListing.types';

import { formatFileSize } from '@/utils/formatFileSize';

export const FileListing = ({ acceptedFiles, error }: FileListingProps) => {
  const files = acceptedFiles.map((file: FileWithPath) => (
    <p key={file.path}>
      {file.path} [{formatFileSize(file.size)}]
    </p>
  ));

  if (!files.length && !error) {
    return null;
  }

  return (
    <div>
      {!!files.length && <AcceptedFiles>{files}</AcceptedFiles>}
      {!!error && (
        <div>
          <ErrorMessage>{error.message}</ErrorMessage>
        </div>
      )}
    </div>
  );
};
