import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';

export const StyledTableRow = styled(TableRow)`
  &:hover {
    background: ${({ theme }) => theme.colors.GREY};
  }
`;

export const StyledTableCell = styled(TableCell)`
  cursor: pointer;
`;
