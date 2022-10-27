import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChangeEvent, MouseEvent } from 'react';

import { TablePaginationActions } from './tablePaginationActions/TablePaginationActions';
import { TableProps } from './Tables.types';
import { StyledTableRow } from './Table.styles';

import { useFiltersParams } from '@/context/filtersParams/hooks/useFiltersParams';

export const Table = <T,>({
  rows,
  count,
  keyExtractor,
  renderRow,
  onNextPage,
  onPreviousPage,
  hasNextPage,
  onRefetch,
  onRowClick,
}: TableProps<T>) => {
  const { limit, offset, setLimitArg, setOffsetArg } = useFiltersParams();

  const handleChangePage = (_: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setOffsetArg(newPage);
    if (offset < newPage) {
      onNextPage();
    }
    if (offset > newPage) {
      onPreviousPage();
    }
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setLimitArg(Number(event.target.value));
    setOffsetArg(0);
    onRefetch();
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="orders table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={keyExtractor(row)} onClick={(event) => onRowClick(event, row)}>
              {renderRow(row)}
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, 75]}
              colSpan={3}
              count={count}
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
