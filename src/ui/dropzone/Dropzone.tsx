import { useDropzone } from 'react-dropzone';

import { UploadButton } from '../uploadButton/UploadButton';

import { defaultConfig } from './Dropzone.constans';
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

import { useSettingsContext } from '@/context/settings/hooks/useSettingsContext';

export const Dropzone = ({ onDrop, onChange, onBlur, error, fetchedFiles, uploadedFiles }: DropzoneProps) => {
  const { settings } = useSettingsContext();

  const { getRootProps, open, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    ...defaultConfig,
    ...(settings && {
      accept: settings.fileTypes,
      maxFiles: settings.maxFileSize,
    }),
    onDrop: onDrop,
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
      <FileListing uploadedFiles={uploadedFiles} fetchedFiles={fetchedFiles} error={error} />
    </Container>
  );
};
