import { StyledUploadButton, Box, Blob } from './UploadButton.styles';
import { UploadButtonProps } from './UploadButton.types';

export const UploadButton = ({ children, handleClick }: UploadButtonProps) => {
  return (
    <StyledUploadButton handleClick={handleClick}>
      {children}
      <Box>
        <Blob />
        <Blob />
        <Blob />
      </Box>
    </StyledUploadButton>
  );
};
