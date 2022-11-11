import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';

export const StyledMenu = styled(Menu)`
  margin-top: 48px;
`;

export const StyledAvatar = styled(Avatar)`
  background: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  color: ${({ theme }) => theme.colors.WHITE};
`;
