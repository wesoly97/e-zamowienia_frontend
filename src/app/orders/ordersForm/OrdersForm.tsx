import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';

import { OrdersFormProps } from './OrdersForm.types';

import { useSettingsContext } from '@/context/settings/hooks/useSettingsContext';
import { Autocomplete } from '@/ui/autocomplete/Autocomplete';
import { Input } from '@/ui/input/Input';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';

export const OrdersForm = ({ updateFilters, onRefetch }: OrdersFormProps) => {
  const { settings } = useSettingsContext();

  const [title, setTitle] = useState('');

  const debouncedTitle = useDebounce(title, onRefetch);

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    updateFilters('filterOption[title]', debouncedTitle);
  };

  const [category, setCategory] = useState('');

  const handleChangeCategory = (_: SyntheticEvent<Element, Event>, newValue: string) => {
    if (newValue === null) {
      newValue = '';
    }

    setCategory(newValue);
    updateFilters('filterOption[category]', newValue);
    onRefetch();
  };

  const [mode, setMode] = useState('');

  const handleChangeMode = (_: SyntheticEvent<Element, Event>, newValue: string) => {
    if (newValue === null) {
      newValue = '';
    }

    setMode(newValue);
    updateFilters('filterOption[mode]', newValue);
    onRefetch();
  };

  const autocompleteCategoryInput = (params: AutocompleteRenderInputParams) => (
    <Input {...params} label={'Kategoria'} />
  );

  const autocompleteModeInput = (params: AutocompleteRenderInputParams) => <Input {...params} label={'Typ'} />;

  if (!settings) {
    return null;
  }

  return (
    <>
      <Input
        id={'title'}
        variant={'outlined'}
        value={title}
        label={'Tytuł'}
        type={'text'}
        onChange={handleChangeTitle}
      />
      <Autocomplete
        id={'category'}
        options={settings.orderCategories}
        renderInput={autocompleteCategoryInput}
        value={category}
        onChange={handleChangeCategory}
      />
      <Autocomplete
        id={'mode'}
        options={settings.orderModes}
        renderInput={autocompleteModeInput}
        value={mode}
        onChange={handleChangeMode}
      />
    </>
  );
};
