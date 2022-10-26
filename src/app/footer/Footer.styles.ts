import styled from 'styled-components';

import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import { containerStyles } from '@/theme/shared';

export const Container = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400px;
  justify-content: flex-start;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  color: ${({ theme }) => theme.colors.WHITE};
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
  gap: 80px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnHeader = styled.h3`
  ${({ theme }) => theme.fontType.h3};
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
