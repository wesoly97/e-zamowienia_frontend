import { Controller, useFormContext } from 'react-hook-form';

import { Select } from '../select/Select';

import { FormSelectProps } from './FormSelect.types';

export const FormSelect = <T,>({ name, data, labelId, id, label, disabled, required }: FormSelectProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <Select
            data={data}
            id={id}
            labelId={labelId}
            label={label}
            disabled={disabled}
            required={required}
            error={!!error}
            errorText={error?.message}
            {...field}
          />
        );
      }}
    />
  );
};
