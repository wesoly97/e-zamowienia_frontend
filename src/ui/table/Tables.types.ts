import { ReactNode } from 'react';

export type TableProps<T> = {
  rows: T[];
  keyExtractor: (row: T) => string;
  renderRow: (row: T) => ReactNode;
  onLoadMore: VoidFunction;
  hasNextPage?: boolean;
  onRefetch: VoidFunction;
};
