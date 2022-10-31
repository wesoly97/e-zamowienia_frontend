import { SelectProps } from './Select.types';
import { SelectBase } from './selectBase/SelectBase';
import { SelectWrapper } from './selectWrapper/SelectWrapper';

export const Select = <T,>({
  data,
  labelId,
  id,
  label,
  value,
  onChange,
  disabled,
  required,
  error,
  errorText,
}: SelectProps<T>) => {
  return (
    <SelectWrapper labelId={labelId} label={label} disabled={disabled} required={required} error={error}>
      <SelectBase
        data={data}
        labelId={labelId}
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        errorText={errorText}
      />
    </SelectWrapper>
  );
};
