import { TableProps } from '../Tables.types';

export type TableBodyProps<T> = Pick<TableProps<T>, 'rows' | 'keyExtractor' | 'renderRow' | 'onRowClick'>;
