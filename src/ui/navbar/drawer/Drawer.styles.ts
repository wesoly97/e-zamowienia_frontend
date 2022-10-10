import styled from 'styled-components';
import { Drawer } from '@mui/material';

export const StyledDrawer = styled(Drawer)`
  display: block;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }

  & .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
    width: 300px;

    & > svg {
      margin: 0 20px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 20px 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
