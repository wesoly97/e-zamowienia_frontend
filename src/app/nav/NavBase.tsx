import { ListItemButton } from '@mui/material';

import { StyledList, StyledListItem, StyledLogo } from './Nav.styles';
import { NavBaseProps } from './Nav.types';

import { Navbar } from '@/ui/navbar/Navbar';

export const NavBase = ({
  position,
  buttons,
  userPanel,
  handleRedirectMainPage,
  handleRedirectOrdersPage,
}: NavBaseProps) => {
  return (
    <Navbar position={position} buttons={buttons} userPanel={userPanel}>
      <StyledLogo onClick={handleRedirectMainPage} />
      <StyledList>
        <StyledListItem>
          <ListItemButton onClick={handleRedirectOrdersPage}>
            <span>Zamówienia</span>
          </ListItemButton>
        </StyledListItem>
      </StyledList>
    </Navbar>
  );
};
