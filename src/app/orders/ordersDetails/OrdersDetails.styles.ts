import styled from 'styled-components';

import { containerStyles } from '@/theme/shared';

export const Container = styled.div`
  ${containerStyles}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnIdentifier = styled.div`
  flex: 0 1 100%;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex: 0 1 70%;
  }
`;

export const ColumnSpecification = styled.div`
  flex: 0 1 30%;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
    text-decoration: underline;
  }
`;
