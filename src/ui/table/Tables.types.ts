import { MouseEvent, ReactElement } from 'react';

export type TableActions<T> = {
  icon: ReactElement;
  tooltip: string;
  onActionClick: (event: MouseEvent, row: T) => void;
};

export type TableColumnName = {
  id: string;
  title: string;
};

export type TableProps<T> = {
  rows: T[];
  headers: TableColumnName[];
  count: number;
  keyExtractor: (row: T) => string;
  renderRow: (row: T) => (string | number)[];
  onRowClick: (event: MouseEvent, row: T) => void;
  onNextPage: VoidFunction;
  onPreviousPage: VoidFunction;
  hasNextPage?: boolean;
  actions?: TableActions<T>[];
};
