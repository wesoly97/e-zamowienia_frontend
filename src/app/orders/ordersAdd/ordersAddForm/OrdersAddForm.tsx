import { ChangeEvent } from 'react';
import { FormProvider } from 'react-hook-form';

import { Form } from './OrdersAddForm.styles';
import { OrdersAddFormProps } from './OrdersAddForm.types';

import { FormInput } from '@/ui/formInput/FormInput';
import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const OrdersAddForm = ({ isSubmitting, onSubmit, form }: OrdersAddFormProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    return /^[0-9]+\.?[0-9]*$/.test(event.target.value);
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
        <FormInput label={'Opis'} name={'description'} multiline rows={4} />
        <FormInput
          label={'Data składania'}
          name={'expirationDate'}
          type={'date'}
          inputProps={{
            min: new Date().toISOString().slice(0, 10),
          }}
          InputLabelProps={{ shrink: true }}
        />
        <PrimaryButton type={'submit'} disabled={isSubmitting}>
          {isSubmitting ? '...' : 'Dodawanie'}
        </PrimaryButton>
      </FormProvider>
    </Form>
  );
};
