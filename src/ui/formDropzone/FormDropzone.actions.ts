import {
  Action,
  ActionType,
  AddFetchedFileActionPayload,
  AddUploadedFileActionPayload,
  RemoveFileActionPayload,
} from './FormDropzone.types';

export const addFetchedFile = (payload: AddFetchedFileActionPayload): Action => ({
  type: ActionType.AddFetchedFile,
  payload,
});

export const addUploadedFile = (payload: AddUploadedFileActionPayload): Action => ({
  type: ActionType.AddUploadedFile,
  payload,
});

export const removeFile = (payload: RemoveFileActionPayload): Action => ({
  type: ActionType.RemoveFile,
  payload,
});
