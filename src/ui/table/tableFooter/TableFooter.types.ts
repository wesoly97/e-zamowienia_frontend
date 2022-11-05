import { TableProps } from '../Tables.types';

export type TableFooterProps = Pick<TableProps<undefined>, 'count' | 'onNextPage' | 'onPreviousPage' | 'hasNextPage'>;
