import { Controller, useFormContext } from 'react-hook-form';

import { Dropzone } from '../dropzone/Dropzone';

import { FormDropzoneProps } from './FormDropzone.types';

export const FormDropzone = ({ name }: FormDropzoneProps) => {
  const form = useFormContext();

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, onBlur }, fieldState: { error } }) => {
        return (
          <Dropzone
            onDrop={(acceptedFiles) => {
              form.setValue('files', acceptedFiles as unknown as FileList, {
                shouldValidate: true,
              });
            }}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
          />
        );
      }}
    />
  );
};
