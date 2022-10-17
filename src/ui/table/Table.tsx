import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMemo, ChangeEvent, MouseEvent } from 'react';

import { TablePaginationActions } from './tablePaginationActions/TablePaginationActions';
import { TableProps } from './Tables.types';

import { useFiltersParams } from '@/context/filtersParams/hooks/useFiltersParams';

export const Table = <T,>({ rows, keyExtractor, renderRow, onLoadMore, hasNextPage, onRefetch }: TableProps<T>) => {
  const { limit, offset, setLimitArg, setOffsetArg } = useFiltersParams();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = useMemo(() => {
    return !!offset ? Math.max(0, (1 + offset) * limit - rows.length) : 0;
  }, [offset, rows.length, limit]);

  const handleChangePage = (_: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setOffsetArg(newPage);
    onLoadMore();
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLimitArg(Number(event.target.value));
    setOffsetArg(0);
    onRefetch();
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 500 }} aria-label="orders table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={keyExtractor(row)}>{renderRow(row)}</TableRow>
          ))}
          {!!emptyRows && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, 75]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={limit}
              page={offset}
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
          </TableRow>
        </TableFooter>
      </MuiTable>
    </TableContainer>
  );
};
