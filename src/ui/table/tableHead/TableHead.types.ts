import { TableProps } from '../Tables.types';

export type TableColumnName = {
  id: string;
  title: string;
};

export type TableHeadProps<T> = Pick<TableProps<T>, 'actions'>;
