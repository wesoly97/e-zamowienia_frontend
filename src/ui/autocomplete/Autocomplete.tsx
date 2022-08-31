import { HTMLAttributes, useState } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { StyledAutocomplete } from './Autocomplete.styles';
import { AutocompleteProps } from './Autocomplete.types';

export const Autocomplete = ({
  id,
  options,
  getOptionLabel,
  groupBy,
  renderInput,
  onChange,
  value,
  getOptionDisabled,
  multiple,
  limitTags,
}: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState('');

  // const renderOption = ({ props, stateValue }: { props: HTMLAttributes<HTMLLIElement>; stateValue: string }) => {
  //   const matches = match(optionProp, stateValue);
  //   const parts = parse(optionProp, matches);

  //   return (
  //     <li {...props}>
  //       <div>
  //         {parts.map((part, index) => (
  //           <span
  //             key={index}
  //             style={{
  //               fontWeight: part.highlight ? 700 : 400,
  //             }}
  //           >
  //             {part.text}
  //           </span>
  //         ))}
  //       </div>
  //     </li>
  //   );
  // };

  return (
    <StyledAutocomplete
      // value={value}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // onChange={onChange as any}
      // inputValue={inputValue}
      // onInputChange={(_, newValue) => {
      //   setInputValue(newValue);
      // }}
      id={id}
      options={options}
      // groupBy={groupBy}
      // getOptionDisabled={getOptionDisabled}
      // openOnFocus={true}
      renderInput={renderInput}
      getOptionLabel={getOptionLabel}
      // multiple={multiple}
      // limitTags={limitTags}
      // renderOption={(props, _, { inputValue: stateValue }) => renderOption({ props, stateValue })}
    />
  );
};
