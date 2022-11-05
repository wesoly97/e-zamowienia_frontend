import { StyledTableRow } from './TableBody.styles';
import { TableBodyProps } from './TableBody.types';

export const TableBody = <T,>({ rows, keyExtractor, renderRow, onRowClick }: TableBodyProps<T>) => {
  return (
    <tbody>
      {rows.map((row) => (
        <StyledTableRow key={keyExtractor(row)} onClick={(event) => onRowClick(event, row)}>
          {renderRow(row)}
        </StyledTableRow>
      ))}
    </tbody>
  );
};
