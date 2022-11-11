import { ChangeEvent, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { SelectChangeEvent } from '@mui/material/Select';

import { Form } from './OrdersEditForm.styles';
import { OrdersEditFormProps } from './OrdersEditForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { FormDropzone } from '@/ui/formDropzone/FormDropzone';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { FormSelect } from '@/ui/formSelect/FormSelect';
import { useSettingsContext } from '@/context/settings/hooks/useSettingsContext';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';
import { PrimaryLoader } from '@/theme/shared';

export const OrdersEditForm = ({
  isSubmitting,
  onSubmit,
  form,
  minExpirationDate,
  initialFiles,
}: OrdersEditFormProps) => {
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
          label={t('orderEdit.inputs.procedureIdentifier')}
        />
        <FormSelect
          id={'category'}
          name={'category'}
          data={settings.orderCategories}
          labelId={'category-label'}
          label={t('orderEdit.inputs.category')}
          value={category}
            // @ts-ignore
          onChange={handleChangeCategory}
        />
        <FormSelect
          id={'mode'}
          name={'mode'}
          data={settings.orderModes}
          labelId={'mode-label'}
          label={t('orderEdit.inputs.mode')}
          value={mode}
            // @ts-ignore
          onChange={handleChangeMode}
        />
        <FormInput id={'title'} name={'title'} label={t('orderEdit.inputs.title')} />
        <FormInput
          id={'price'}
          name={'price'}
          label={t('orderEdit.inputs.price')}
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
          label={t('orderEdit.inputs.description')}
          multiline
          rows={8}
        />
        <FormInput
          id={'expiration-date'}
          name={'expirationDate'}
          label={t('orderEdit.inputs.expirationDate')}
          type={'date'}
          inputProps={{
            min: minExpirationDate,
          }}
          InputLabelProps={{ shrink: true }}
        />
        <FormDropzone name={'files'} initialFiles={initialFiles} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? <PrimaryLoader size={28} /> : t('orderEdit.submit')}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
