import { MuiTelInputProps } from 'mui-tel-input';

export type FormPhoneInputProps = Required<Pick<MuiTelInputProps, 'name' | 'label' | 'id'>> &
  Pick<MuiTelInputProps, 'disabled'>;
