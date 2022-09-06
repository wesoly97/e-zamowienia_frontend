import styled from 'styled-components';
import { Drawer } from '@mui/material';

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

export const List = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-left: 20px;
  }
`;

export const Utils = styled.div`
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-grow: 1;
    justify-content: flex-end;
    display: flex;
  }
`;

export const StyledDrawer = styled(Drawer)`
  display: block;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }

  & .MuiDrawer-paper {
    padding: 20px 0;
    background-color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  }
`;
