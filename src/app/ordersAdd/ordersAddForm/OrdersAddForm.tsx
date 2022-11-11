import { ChangeEvent, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { SelectChangeEvent } from '@mui/material/Select';

import { Form } from './OrdersAddForm.styles';
import { OrdersAddFormProps } from './OrdersAddForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { FormDropzone } from '@/ui/formDropzone/FormDropzone';
import { parseDateToString } from '@/utils/date/parseDateToString';
import { FormSelect } from '@/ui/formSelect/FormSelect';
import { useSettingsContext } from '@/context/settings/hooks/useSettingsContext';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';
import { PrimaryLoader } from '@/theme/shared';

export const OrdersAddForm = ({ isSubmitting, onSubmit, form }: OrdersAddFormProps) => {
  const { settings } = useSettingsContext();
  const { t } = useLocaleContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    return /^\d+\.?\d{0,2}$/.test(event.target.value);
  };

  const [category, setCategory] = useState('');

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [mode, setMode] = useState('');

  const handleChangeMode = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };

  if (!settings) {
    return null;
  }

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput
          id={'procedure-identifier'}
          name={'procedureIdentifier'}
          label={t('orderAdd.inputs.procedureIdentifier')}
          InputLabelProps={{ shrink: true }}
        />
        <FormSelect
          id={'category'}
          name={'category'}
          data={settings.orderCategories}
          labelId={'category-label'}
          label={t('orderAdd.inputs.category')}
          value={category}
          onChange={handleChangeCategory}
        />
        <FormSelect
          id={'mode'}
          name={'mode'}
          data={settings.orderModes}
          labelId={'mode-label'}
          label={t('orderAdd.inputs.mode')}
          value={mode}
          onChange={handleChangeMode}
        />
        <FormInput id={'title'} name={'title'} label={t('orderAdd.inputs.title')} InputLabelProps={{ shrink: true }} />
        <FormInput
          id={'price'}
          name={'price'}
          label={t('orderAdd.inputs.price')}
          handleChange={handleChange}
          inputProps={{
            min: 0,
            max: 9999999999,
            maxLength: 10,
          }}
        />
        <FormInput
          id={'description'}
          name={'description'}
          label={t('orderAdd.inputs.description')}
          multiline
          rows={8}
          InputLabelProps={{ shrink: true }}
        />
        <FormInput
          id={'expiration-date'}
          name={'expirationDate'}
          label={t('orderAdd.inputs.expirationDate')}
          type={'date'}
          inputProps={{
            min: parseDateToString(),
          }}
          InputLabelProps={{ shrink: true }}
        />
        <FormDropzone name={'files'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('orderAdd.submit')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
