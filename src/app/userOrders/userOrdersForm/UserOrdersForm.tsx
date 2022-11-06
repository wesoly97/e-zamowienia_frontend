import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';

import { UserOrdersFormProps } from './UserOrdersForm.types';

import { useSettingsContext } from '@/context/settings/hooks/useSettingsContext';
import { Autocomplete } from '@/ui/autocomplete/Autocomplete';
import { Input } from '@/ui/input/Input';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';

export const UserOrdersForm = ({ updateFilters, filters }: UserOrdersFormProps) => {
  const { settings } = useSettingsContext();

  const [title, setTitle] = useState(filters.filter_title);
  const debouncedTitle = useDebounce(title);
  const [category, setCategory] = useState(filters.filter_category || '');
  const [mode, setMode] = useState(filters.filter_mode || '');

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeCategory = (_: SyntheticEvent<Element, Event>, newValue: string) => {
    if (newValue === null) {
      newValue = '';
    }

    setCategory(newValue);
    updateFilters('filter_category', newValue);
  };

  const handleChangeMode = (_: SyntheticEvent<Element, Event>, newValue: string) => {
    if (newValue === null) {
      newValue = '';
    }

    setMode(newValue);
    updateFilters('filter_mode', newValue);
  };

  const autocompleteCategoryInput = (params: AutocompleteRenderInputParams) => (
    <Input {...params} label={'Kategoria'} />
  );

  const autocompleteModeInput = (params: AutocompleteRenderInputParams) => <Input {...params} label={'Typ'} />;

  useEffect(() => {
    if (debouncedTitle !== undefined) {
      updateFilters('filter_title', debouncedTitle);
    }
  }, [debouncedTitle]);

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
          // @ts-ignore
        onChange={handleChangeCategory}
      />
      <Autocomplete
        id={'mode'}
        options={settings.orderModes}
        renderInput={autocompleteModeInput}
        value={mode}
          // @ts-ignore
        onChange={handleChangeMode}
      />
    </>
  );
};
