import { HTMLAttributes, useState } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { StyledAutocomplete, Option } from './Autocomplete.styles';
import { AutocompleteProps } from './Autocomplete.types';

export const Autocomplete = ({
  id,
  options,
  getOptionLabel,
  groupBy,
  renderInput,
  onChange,
  value,
  isOptionEqualToValue,
  getOptionDisabled,
}: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState('');

  const renderOption = ({
    props,
    option,
    stateValue,
  }: {
    props: HTMLAttributes<HTMLLIElement>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    option: any;
    stateValue: string;
  }) => {
    const optionStringified = String(getOptionLabel);
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
      value={value}
      onChange={onChange}
      inputValue={inputValue}
      onInputChange={(_, newValue) => {
        setInputValue(newValue);
      }}
      id={id}
      options={options}
      groupBy={groupBy}
      getOptionDisabled={getOptionDisabled}
      isOptionEqualToValue={isOptionEqualToValue}
      openOnFocus={true}
      renderInput={renderInput}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option, { inputValue: stateValue }) => renderOption({ props, option, stateValue })}
      clearOnEscape={false}
      clearOnBlur={false}
      freeSolo={true}
    />
  );
};
