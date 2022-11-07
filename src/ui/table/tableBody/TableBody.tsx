import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import { useCallback } from 'react';

import { StyledTableCell, StyledTableRow } from './TableBody.styles';
import { TableBodyProps } from './TableBody.types';

export const TableBody = <T,>({ rows, keyExtractor, renderRow, onRowClick, actions }: TableBodyProps<T>) => {
  const createDataCells = useCallback(
    (row: T) =>
      renderRow(row).map((rowValue, key) => (
        <StyledTableCell key={key} onClick={(event) => onRowClick(event, row)}>
          {rowValue}
        </StyledTableCell>
      )),
    [onRowClick, renderRow],
  );

  const createActionCell = useCallback(
    (row: T) => {
      if (actions) {
        return actions.map(({ icon, tooltip, onActionClick }, id) => (
          <TableCell key={id}>
            <IconButton aria-label={tooltip} onClick={(_) => onActionClick(_, row)}>
              {icon}
            </IconButton>
          </TableCell>
        ));
      }
    },
    [actions],
  );

  return (
    <tbody>
      {rows.map((row) => (
        <StyledTableRow key={keyExtractor(row)}>
          {createDataCells(row)}
          {createActionCell(row)}
        </StyledTableRow>
      ))}
    </tbody>
  );
};
