import styled, { css, DefaultTheme } from 'styled-components';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const getBorderColor = ({
  theme,
  $isFocused,
  $isDragAccept,
  $isDragReject,
}: {
  theme: DefaultTheme;
  $isFocused: boolean;
  $isDragAccept: boolean;
  $isDragReject: boolean;
}) => {
  if ($isDragAccept) {
    return `${theme.palette.success.light}`;
  }
  if ($isDragReject) {
    return `${theme.palette.error.main}`;
  }
  if ($isFocused) {
    return `${theme.colors.WHITE}`;
  }
  return `${theme.colors.DARK_BLUE[100]}`;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div<{ $isFocused: boolean; $isDragAccept: boolean; $isDragReject: boolean }>`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${({ theme, $isFocused, $isDragAccept, $isDragReject }) =>
    getBorderColor({ theme, $isFocused, $isDragAccept, $isDragReject })};
  border-style: dashed;
  background-color: ${({ theme }) => theme.colors.GREY};
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  font-weight: 700;
  outline: none;
  user-select: none;
`;

export const StyledUploadFileIcon = styled(UploadFileIcon)`
  font-size: 50px;
`;

export const Header = styled.p`
  margin-top: 12px;
`;

export const Desciption = styled.span`
  font-style: italic;
  font-size: 12px;
  font-weight: 400;
  margin-top: 20px;
`;

export const Plug = styled.div<{ $isDragAccept: boolean; $isDragReject: boolean }>`
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.GREY};

  ${({ $isDragAccept, $isDragReject }) => {
    return (
      ($isDragAccept || $isDragReject) &&
      css`
        display: flex;
      `
    );
  }}
`;

export const StyledCloudUploadIcon = styled(CloudUploadIcon)`
  font-size: 50px;
`;
