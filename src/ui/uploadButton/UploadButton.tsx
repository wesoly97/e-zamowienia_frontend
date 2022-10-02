import { StyledUploadButton, Box, Blob } from './UploadButton.styles';
import { UploadButtonProps } from './UploadButton.types';

export const UploadButton = ({ accept, multiple, children }: UploadButtonProps) => {
  return (
    <StyledUploadButton>
      {children}
      <input hidden accept={accept} multiple={multiple} type="file" />
      <Box>
        <Blob />
        <Blob />
        <Blob />
      </Box>
    </StyledUploadButton>
  );
};
