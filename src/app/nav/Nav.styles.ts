import { List } from '@mui/material';
import styled from 'styled-components';

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    justify-content: end;
    flex-grow: 1;
  }
`;

export const StyledListItem = styled.li`
  padding: 0;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.WHITE};

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 8px 16px;
  }
`;
