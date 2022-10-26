import { Reducer } from 'react';

import { Action, ActionType, State } from './FormDropzone.types';

export const initialState: State = {
  uploadedFiles: [],
  fetchedFiles: [],
};

export const formDropzoneReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.AddUploadedFile:
      //TODO check existing object
      if (JSON.stringify(state.uploadedFiles).includes(JSON.stringify(action.payload.uploadedFiles))) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        uploadedFiles: [...state.uploadedFiles, ...action.payload.uploadedFiles],
      };
    case ActionType.AddFetchedFile:
      if (JSON.stringify(state.fetchedFiles).includes(JSON.stringify(action.payload.fetchedFiles))) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        fetchedFiles: [...state.fetchedFiles, ...action.payload.fetchedFiles],
      };
    case ActionType.RemoveFile:
      //TODO
      return {
        ...state,
        uploadedFiles: state.uploadedFiles,
        fetchedFiles: state.fetchedFiles,
      };
    default:
      return state;
  }
};
