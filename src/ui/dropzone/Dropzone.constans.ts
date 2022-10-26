import { Config } from './Dropzone.types';

export const defaultConfig: Config = {
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
};
