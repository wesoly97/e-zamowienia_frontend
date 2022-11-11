import { List } from '@mui/material';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

import { ReactComponent as Logo } from '@/assets/icons/logo.svg';

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
    color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
    padding: 8px 16px;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 190px;
  height: 30px;
  padding-bottom: 7px;
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.colors.WHITE};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    & path {
      fill: ${({ theme }) => theme.colors.DARK_BLUE[100]};
    }
  }
`;

export const Languages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.WHITE};
  padding-top: 8px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    border-top: none;
    padding-top: inherit;
    margin-right: 20px;
  }
`;

export const LanguageButton = styled(IconButton)`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.WHITE};

  ${({ theme }) => theme.breakpoints.up('md')} {
    color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  }
`;
