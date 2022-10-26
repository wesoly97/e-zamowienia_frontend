import { useEffect, useReducer } from 'react';
import { FileRejection } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';

import { Dropzone } from '../dropzone/Dropzone';

import { addFetchedFile, addUploadedFile } from './FormDropzone.actions';
import { formDropzoneReducer, initialState } from './FormDropzone.reducer';
import { FormDropzoneProps } from './FormDropzone.types';

export const FormDropzone = ({ name, initialFiles }: FormDropzoneProps) => {
  const form = useFormContext();

  const [{ fetchedFiles, uploadedFiles }, dispatch] = useReducer(formDropzoneReducer, initialState);

  useEffect(() => {
    if (!!initialFiles) {
      dispatch(addFetchedFile({ fetchedFiles: initialFiles }));
    }
  }, [initialFiles]);

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, onBlur }, fieldState: { error } }) => {
        return (
          <Dropzone
            onDrop={(acceptedFiles: File[], fileRejections: FileRejection[]) => {
              //TODO errors from dropzone
              dispatch(addUploadedFile({ uploadedFiles: acceptedFiles }));
              form.setValue('files', acceptedFiles, {
                shouldValidate: true,
              });
            }}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            fetchedFiles={fetchedFiles}
            uploadedFiles={uploadedFiles}
          />
        );
      }}
    />
  );
};
