import { ChangeEvent, MouseEvent } from 'react';
import TablePagination from '@mui/material/TablePagination';

import { TablePaginationActions } from '../tablePaginationActions/TablePaginationActions';

import { TableFooterProps } from './TableFooter.types';

import { useFiltersParamsContext } from '@/context/filtersParams/hooks/useFiltersParamsContext';

export const TableFooter = ({ count, onNextPage, onPreviousPage, hasNextPage }: TableFooterProps) => {
  const { query, setFilter } = useFiltersParamsContext();

  const handleChangePage = (_: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setFilter('offset', String(newPage));
    if (Number(query['offset']) < newPage) {
      onNextPage();
    }
    if (Number(query['offset']) > newPage) {
      onPreviousPage();
    }
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter('limit', event.target.value);
    setFilter('offset', '0');
  };

  return (
    <tfoot>
      <tr>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 75]}
          colSpan={3}
          count={count}
          rowsPerPage={Number(query['limit'] || 10)}
          page={Number(query['offset'] || 0)}
          showLastButton={hasNextPage}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          labelRowsPerPage={'Wierszy na stronę:'}
          labelDisplayedRows={({ from, to, count }) => {
            return `${from}–${to}(${to - from + 1}) z ${count}`;
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </tr>
    </tfoot>
  );
};
