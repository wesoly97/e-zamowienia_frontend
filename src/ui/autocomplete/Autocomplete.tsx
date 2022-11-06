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
      // @ts-ignore
      matches = match(option[parameter], stateValue, { insideWords: true });
      // @ts-ignore
      parts = parse(option[parameter], matches);
    } else {
      // @ts-ignore
      matches = match(option, stateValue, { insideWords: true });
      // @ts-ignore
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

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <StyledAutocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return option;
        }

        // @ts-ignore
        if (typeof option[selectValue] === 'string') {
          // @ts-ignore
          return option[selectValue];
        }

        return '';
      }}
      isOptionEqualToValue={(option, value) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return option === value;
        }

        // @ts-ignore
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
      // @ts-ignore
      renderOption={(props, option, { inputValue: stateValue }) => renderOption({ props, option, stateValue })}
      clearOnEscape={false}
      clearOnBlur={false}
      openOnFocus
      freeSolo
    />
  );
};
