import { HTMLAttributes, useState } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

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
    const optionStringified = String(selectValue);
    const parameter = optionStringified.substring(optionStringified.indexOf('.') + 1, optionStringified.length);
    const matches = match(option[parameter], stateValue, { insideWords: true });
    const parts = parse(option[parameter], matches);

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
      getOptionLabel={(option) => (typeof option[selectValue] === 'string' ? option[selectValue] : '')}
      isOptionEqualToValue={(option, value) => option[selectValue] === value[selectValue]}
      value={value}
      onChange={onChange}
      inputValue={inputValue}
      onInputChange={(_, newValue) => {
        setInputValue(newValue);
      }}
      groupBy={groupBy}
      getOptionDisabled={getOptionDisabled}
      renderInput={renderInput}
      renderOption={(props, option, { inputValue: stateValue }) => renderOption({ props, option, stateValue })}
      clearOnEscape={false}
      clearOnBlur={false}
      openOnFocus={true}
      freeSolo={true}
    />
  );
};
