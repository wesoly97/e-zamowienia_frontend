import { ButtonBase } from '@mui/material';
import styled from 'styled-components';

export const StyledButton = styled(ButtonBase)`
  width: 160px;
  height: 45px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  outline: ${({ theme }) => theme.colors.DARK_BLUE[100]} solid 1px;

  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  background-color: ${({ theme }) => theme.colors.WHITE};
`;
