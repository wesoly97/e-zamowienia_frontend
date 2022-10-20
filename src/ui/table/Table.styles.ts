import { TableRow } from '@mui/material';
import styled from 'styled-components';

export const StyledTableRow = styled(TableRow)`
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.GREY};
  }
`;
