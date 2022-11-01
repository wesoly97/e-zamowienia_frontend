import styled from 'styled-components';

import { containerStyles } from '@/theme/shared';

export const Container = styled.div`
  ${containerStyles}
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
  flex: 0 0 60%;
`;

export const PasswordColumn = styled.div`
  flex: 0 0 25%;
`;
