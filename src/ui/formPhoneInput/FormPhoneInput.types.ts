import { PhoneInputProps } from '../phoneInput/PhoneInput.types';

export type FormPhoneInputProps = Required<Pick<PhoneInputProps, 'name' | 'label' | 'id'>> &
  Pick<PhoneInputProps, 'disabled'>;
