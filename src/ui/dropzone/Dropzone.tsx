/* eslint-disable react/prop-types */
import { useDropzone } from 'react-dropzone';

import { UploadButton } from '../uploadButton/UploadButton';

import {
  Wrapper,
  Container,
  Desciption,
  Header,
  Plug,
  StyledCloudUploadIcon,
  StyledUploadFileIcon,
} from './Dropzone.styles';
import { DropzoneProps } from './Dropzone.types';
import { FileListing } from './fileListing/FileListing';

export const Dropzone = ({ onDrop, onChange, onBlur, error }: DropzoneProps) => {
  //TODO fetch from backend
  const { acceptedFiles, getRootProps, open, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      'text/plain': [],
      'application/pdf': [],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [],
      'application/vnd.ms-excel': [],
      'application/msword': [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
      'application/gzip': [],
      'application/zip': [],
      'application/x-7z-compressed': [],
      'application/vnd.oasis.opendocument.text': [],
      'application/vnd.oasis.opendocument.spreadsheet': [],
    },
    maxFiles: 20,
    maxSize: 20971520,
    noClick: true,
    noKeyboard: true,
    onDrop,
  });

  return (
    <Container>
      <Wrapper {...getRootProps({ $isFocused: isFocused, $isDragAccept: isDragAccept, $isDragReject: isDragReject })}>
        <input {...getInputProps({ onChange, onBlur })} />
        <StyledUploadFileIcon />
        <Header>Upuść pliki tutaj lub</Header>
        <UploadButton handleClick={open}>Wybierz pliki</UploadButton>
        <Desciption>
          (Akceptowane formaty: *.pdf, *.xlsx, *.xls, *.doc, *.docx, *.gz, *.zip, *.7z, *.odt, *.ods, *.txt)
        </Desciption>
        <Plug {...getRootProps({ $isDragAccept: isDragAccept, $isDragReject: isDragReject })}>
          <StyledCloudUploadIcon />
          <p>Upuść pliki tutaj</p>
        </Plug>
      </Wrapper>
      <FileListing acceptedFiles={acceptedFiles} error={error} />
    </Container>
  );
};
