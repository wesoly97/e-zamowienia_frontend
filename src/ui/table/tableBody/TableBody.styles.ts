import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';

export const StyledTableRow = styled(TableRow)`
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.GREY};
  }
`;
