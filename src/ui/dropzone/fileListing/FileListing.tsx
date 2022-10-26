import { FileWithPath } from 'react-dropzone';
import { useMemo } from 'react';

import { AcceptedFiles, ErrorMessage } from './FileListing.styles';
import { FileListingProps } from './FileListing.types';

import { formatFileSize } from '@/utils/formatFileSize';
import { ResponseFile } from '@/api/types/types';

export const FileListing = ({ uploadedFiles, fetchedFiles, error }: FileListingProps) => {
  const uploadedItems = uploadedFiles.map((file: FileWithPath) => (
    <p key={file.path}>
      {file.path} [{formatFileSize(file.size)}]
    </p>
  ));

  const fetchedItems = useMemo(() => {
    if (!!fetchedFiles) {
      return fetchedFiles.map((file: ResponseFile) => <p key={file.key}>{file.fileName}</p>);
    }
    return undefined;
  }, [fetchedFiles]);

  if (!uploadedItems.length && !error && !fetchedItems) {
    return null;
  }

  return (
    <div>
      {!!fetchedItems && <AcceptedFiles>{fetchedItems}</AcceptedFiles>}
      {!!uploadedItems.length && <AcceptedFiles>{uploadedItems}</AcceptedFiles>}
      {!!error && (
        <div>
          <ErrorMessage>{error.message}</ErrorMessage>
        </div>
      )}
    </div>
  );
};
