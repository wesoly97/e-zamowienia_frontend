import { Controller, useFormContext } from 'react-hook-form';

import { SelectBase } from '../select/selectBase/SelectBase';
import { SelectWrapper } from '../select/selectWrapper/SelectWrapper';

import { FormSelectProps } from './FormSelect.types';

export const FormSelect = <T,>({
  name,
  data,
  labelId,
  id,
  label,
  disabled,
  required,
  defaultOption,
}: FormSelectProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <SelectWrapper
      labelId={labelId}
      label={label}
      disabled={disabled}
      required={required}
      error={!!errors[name]}
      errorText={errors[name]?.message as string}
    >
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, ...fieldRest } }) => {
          return (
            <div ref={ref}>
              <SelectBase
                data={data}
                id={id}
                labelId={labelId}
                label={label}
                fullWidth
                defaultOption={defaultOption}
                {...fieldRest}
              />
            </div>
          );
        }}
      />
    </SelectWrapper>
  );
};
