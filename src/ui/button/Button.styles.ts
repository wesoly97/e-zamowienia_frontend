import { ButtonBase } from '@mui/material';
import styled from 'styled-components';

export const StyledButton = styled(ButtonBase)`
  width: 160px;
  height: 45px;

  color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    margin-top: 12px;
  }
`;
