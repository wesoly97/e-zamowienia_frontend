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
    let matches = undefined;
    let parts = undefined;

    if (!!selectValue) {
      const optionStringified = String(selectValue);
      const parameter = optionStringified.substring(optionStringified.indexOf('.') + 1, optionStringified.length);
      matches = match(option[parameter], stateValue, { insideWords: true });
      parts = parse(option[parameter], matches);
    } else {
      matches = match(option, stateValue, { insideWords: true });
      parts = parse(option, matches);
    }

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
        if (typeof option === 'string' || typeof option === 'number') {
          return option;
        }

        if (typeof option[selectValue] === 'string') {
          return option[selectValue];
        }

        return '';
      }}
      isOptionEqualToValue={(option, value) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return option === value;
        }

        return option[selectValue] === value[selectValue];
      }}
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
      openOnFocus
      freeSolo
    />
  );
};
