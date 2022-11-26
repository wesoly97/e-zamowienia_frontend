import { HTMLAttributes, useState } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import isEqual from 'lodash/isEqual';
import isObject from 'lodash/isObject';

import { StyledAutocomplete, Option } from './Autocomplete.styles';
import { AutocompleteProps } from './Autocomplete.types';

export const Autocomplete = <T,>({
  id,
  groupBy,
  renderInput,
  onChange,
  value,
  getOptionDisabled,
  options,
  selectValue,
}: AutocompleteProps<T>) => {
  const [inputValue, setInputValue] = useState('');

  const renderOption = ({
    props,
    option,
    stateValue,
  }: {
    props: HTMLAttributes<HTMLLIElement>;
    option: T;
    stateValue: string;
  }) => {
    let optionText = option as string;

    if (!!selectValue) {
      const optionStringified = String(selectValue);
      const parameter = optionStringified.substring(optionStringified.indexOf('.') + 1, optionStringified.length);
      optionText = option[parameter as keyof T] as string;
    }

    const matches = match(optionText, stateValue, { insideWords: true });
    const parts = parse(optionText, matches);

    return (
      <li {...props}>
        <div>
          {parts.map((part, index) => (
            <Option key={index + part.text} $isHighlighted={part.highlight}>
              {part.text}
            </Option>
          ))}
        </div>
      </li>
    );
  };

  return (
    <StyledAutocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => {
        if (!!selectValue && isObject(option)) {
          return option[selectValue] as string;
        }

        return option as string;
      }}
      isOptionEqualToValue={(option, value) => isEqual(option, value)}
      value={value}
      onChange={(event, value, reason, details) => {
        if (value === null && typeof value === 'string') {
          value = '';
        }

        onChange(event, value as NonNullable<T>, reason, details);
      }}
      inputValue={inputValue}
      onInputChange={(_, newValue) => {
        setInputValue(newValue);
      }}
      groupBy={groupBy}
      getOptionDisabled={getOptionDisabled}
      renderInput={renderInput}
      renderOption={(props, option, { inputValue: stateValue }) => renderOption({ props, option, stateValue })}
      clearOnBlur={false}
      openOnFocus
      freeSolo
    />
  );
};
