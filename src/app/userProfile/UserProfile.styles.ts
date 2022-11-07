import styled from 'styled-components';

import { containerStyles } from '@/theme/shared';

export const Container = styled.div`
  ${containerStyles}
`;

export const Heading = styled.h1`
  ${({ theme }) => theme.fontType.h3};

  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  text-align: left;
  font-weight: 700;
`;

export const SubHeading = styled.h2`
  ${({ theme }) => theme.fontType.h4};

  color: ${({ theme }) => theme.colors.BLACK};
  text-align: center;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;

export const DetailsColumn = styled.div`
  flex: 0 0 45%;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.WHITE};
  padding: 40px 48px;
`;

export const PasswordColumn = styled.div`
  flex: 0 0 30%;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.WHITE};
  padding: 40px 48px;
  height: fit-content;
  margin-top: 40px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: 0px;
  }
`;
