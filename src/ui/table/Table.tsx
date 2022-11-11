import MuiTable from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import { TableProps } from './Tables.types';
import { TableBody } from './tableBody/TableBody';
import { TableFooter } from './tableFooter/TableFooter';
import { TableHead } from './tableHead/TableHead';

export const Table = <T,>({
  rows,
  headers,
  count,
  keyExtractor,
  renderRow,
  onNextPage,
  onPreviousPage,
  hasNextPage,
  onRowClick,
  actions,
}: TableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label={'table'}>
        <TableHead headers={headers} actions={actions} />
        <TableBody
          rows={rows}
          keyExtractor={keyExtractor}
          renderRow={renderRow}
          onRowClick={onRowClick}
          actions={actions}
        />
        <TableFooter count={count} onNextPage={onNextPage} onPreviousPage={onPreviousPage} hasNextPage={hasNextPage} />
      </MuiTable>
    </TableContainer>
  );
};
