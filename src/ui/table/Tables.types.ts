import { ReactNode, MouseEvent } from 'react';

export type TableProps<T> = {
  rows: T[];
  count: number;
  keyExtractor: (row: T) => string;
  renderRow: (row: T) => ReactNode;
  onRowClick: (event: MouseEvent<HTMLTableRowElement>, row: T) => void;
  onLoadMore: VoidFunction;
  hasNextPage?: boolean;
  onRefetch: VoidFunction;
};
