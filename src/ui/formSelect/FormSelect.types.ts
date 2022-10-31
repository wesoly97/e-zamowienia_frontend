import { SelectProps } from '../select/Select.types';

export type FormSelectProps<T> = { name: string; defaultOption?: boolean } & SelectProps<T>;
