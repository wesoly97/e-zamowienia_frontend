import { ResponseFile } from '@/api/types/types';

export type FormDropzoneProps = {
  name: string;
  initialFiles?: ResponseFile[];
};

export type State = {
  uploadedFiles: File[];
  fetchedFiles: ResponseFile[];
};

export enum ActionType {
  RemoveFile = 'remove-file',
  AddFetchedFile = 'add-fetched-file',
  AddUploadedFile = 'add-uploaded-file',
}

export type RemoveFileActionPayload = {
  key: string;
};

export type RemoveFileAction = {
  type: ActionType.RemoveFile;
  payload: RemoveFileActionPayload;
};

export type AddFetchedFileActionPayload = {
  fetchedFiles: ResponseFile[];
};

export type AddFetchedFileAction = {
  type: ActionType.AddFetchedFile;
  payload: AddFetchedFileActionPayload;
};

export type AddUploadedFileActionPayload = {
  uploadedFiles: File[];
};

export type AddUploadedFileAction = {
  type: ActionType.AddUploadedFile;
  payload: AddUploadedFileActionPayload;
};

export type Action = RemoveFileAction | AddFetchedFileAction | AddUploadedFileAction;
