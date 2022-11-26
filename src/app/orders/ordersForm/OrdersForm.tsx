import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';

import { OrdersFormProps } from './OrdersForm.types';
import { Container } from './OrdersForm.styles';

import { useSettingsContext } from '@/context/settings/hooks/useSettingsContext';
import { Autocomplete } from '@/ui/autocomplete/Autocomplete';
import { Input } from '@/ui/input/Input';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const OrdersForm = ({ updateFilters, filters }: OrdersFormProps) => {
  const { settings } = useSettingsContext();
  const { t } = useLocaleContext();

  const [title, setTitle] = useState(filters.filter_title);
  const debouncedTitle = useDebounce(title);
  const [category, setCategory] = useState(filters.filter_category || '');
  const [mode, setMode] = useState(filters.filter_mode || '');

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeCategory = (_: SyntheticEvent<Element, Event>, newValue: string) => {
    setCategory(newValue);
    updateFilters('filter_category', newValue);
  };

  const handleChangeMode = (_: SyntheticEvent<Element, Event>, newValue: string) => {
    setMode(newValue);
    updateFilters('filter_mode', newValue);
  };

  const autocompleteCategoryInput = (params: AutocompleteRenderInputParams) => (
    <Input {...params} label={t('orders.inputs.category')} />
  );

  const autocompleteModeInput = (params: AutocompleteRenderInputParams) => (
    <Input {...params} label={t('orders.inputs.mode')} />
  );

  useEffect(() => {
    if (debouncedTitle !== undefined) {
      updateFilters('filter_title', debouncedTitle);
    }
  }, [debouncedTitle]);

  if (!settings) {
    return null;
  }

  return (
    <Container>
      <Input
        id={'title'}
        variant={'outlined'}
        value={title}
        label={t('orders.inputs.title')}
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
    </Container>
  );
};
