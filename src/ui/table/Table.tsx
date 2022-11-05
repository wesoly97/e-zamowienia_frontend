import MuiTable from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import { TableProps } from './Tables.types';
import { TableBody } from './tableBody/TableBody';
import { TableFooter } from './tableFooter/TableFooter';
import { TableHead } from './tableHead/TableHead';

export const Table = <T,>({
  rows,
  count,
  keyExtractor,
  renderRow,
  onNextPage,
  onPreviousPage,
  hasNextPage,
  onRowClick,
}: TableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="orders table">
        <TableHead />
        <TableBody rows={rows} keyExtractor={keyExtractor} renderRow={renderRow} onRowClick={onRowClick} />
        <TableFooter count={count} onNextPage={onNextPage} onPreviousPage={onPreviousPage} hasNextPage={hasNextPage} />
      </MuiTable>
    </TableContainer>
  );
};
