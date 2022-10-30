import { ChangeEvent } from 'react';
import { FormProvider } from 'react-hook-form';

import { Form } from './OrdersAddForm.styles';
import { OrdersAddFormProps } from './OrdersAddForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { FormDropzone } from '@/ui/formDropzone/FormDropzone';
import { parseDateToString } from '@/utils/date/parseDateToString';

export const OrdersAddForm = ({ isSubmitting, onSubmit, form }: OrdersAddFormProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    return /^\d+\.?\d{0,2}$/.test(event.target.value);
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <FormInput label={'Identyfikator'} name={'procedureIdentifier'} />
        <FormInput label={'Kategoria'} name={'category'} />
        <FormInput label={'Typ'} name={'mode'} />
        <FormInput label={'Tytuł'} name={'title'} />
        <FormInput
          label={'Kwota'}
          name={'price'}
          handleChange={handleChange}
          inputProps={{
            min: 0,
            max: 9999999999,
            maxLength: 10,
          }}
        />
        <FormInput label={'Opis'} name={'description'} multiline rows={8} />
        <FormInput
          label={'Termin składania'}
          name={'expirationDate'}
          type={'date'}
          inputProps={{
            min: parseDateToString(),
          }}
          InputLabelProps={{ shrink: true }}
        />
        <FormDropzone name={'files'} />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? 'Dodawanie' : 'Dodaj'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
