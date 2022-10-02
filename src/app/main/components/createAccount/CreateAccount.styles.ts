import styled from 'styled-components';

import { ReactComponent as FormIcon } from '@/assets/icons/main/form.svg';

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 800px;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.WHITE};
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Heading = styled.h1`
  font-size: 52px;
  max-width: 650px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
`;

export const StyledSurfIcon = styled(FormIcon)`
  width: 500px;
  height: 500px;
`;
