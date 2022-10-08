import styled from 'styled-components';
import { AppBar } from '@mui/material';

import { ReactComponent as Logo } from '@/assets/icons/logo.svg';

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  box-shadow: none;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding: 0 16px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 0 24px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 56px;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    min-height: 48px;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    min-height: 64px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    justify-content: left;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 190px;
  height: 30px;
  padding-bottom: 7px;
`;

export const ActionBox = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 40px;
`;

export const List = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-left: 20px;
  }
`;
