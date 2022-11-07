import CircularProgress from '@mui/material/CircularProgress';
import styled, { css } from 'styled-components';

export const containerStyles = css`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 750px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 970px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    width: 1170px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    width: 1320px;
  }
`;

export const PrimaryLoader = styled(CircularProgress)`
  color: ${({ theme }) => theme.colors.WHITE};
`;
