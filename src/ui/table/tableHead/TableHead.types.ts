import { TableProps } from '../Tables.types';

export type TableHeadProps<T> = Pick<TableProps<T>, 'actions' | 'headers'>;
