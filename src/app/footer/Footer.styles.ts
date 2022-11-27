import styled, { createGlobalStyle } from 'styled-components';

import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import { containerStyles } from '@/theme/shared';

export const GlobalBottomPadding = createGlobalStyle`
  #root > div {
    padding-bottom: 640px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-bottom: 440px;
    }
  }
`;

export const Container = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 600px;
  justify-content: flex-start;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  color: ${({ theme }) => theme.colors.WHITE};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 400px;
  }
`;

export const Content = styled.div`
  ${containerStyles}

  height: 100%;
  margin-top: 40px;
`;

export const StyledLogo = styled(Logo)`
  width: 190px;
  height: 30px;

  & path {
    fill: ${({ theme }) => theme.colors.WHITE};
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    gap: 80px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 33.33%;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: auto;
  }
`;

export const ColumnHeader = styled.h3`
  ${({ theme }) => theme.fontType.h4};

  ${({ theme }) => theme.breakpoints.up('md')} {
    ${({ theme }) => theme.fontType.h3};
  }
`;

export const Item = styled.p``;

export const BottomBar = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
  color: ${({ theme }) => theme.colors.WHITE};
`;
