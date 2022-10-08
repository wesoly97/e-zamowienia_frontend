import { ListItemButton } from '@mui/material';

import { StyledList, StyledListItem } from './Nav.styles';
import { NavProps } from './Nav.types';

import { Navbar } from '@/ui/navbar/Navbar';

export const Nav = ({ position }: NavProps) => {
  return (
    <>
      <Navbar position={position}>
        <StyledList>
          <StyledListItem>
            <ListItemButton>
              <span>Zamówienia</span>
            </ListItemButton>
          </StyledListItem>
        </StyledList>
      </Navbar>
    </>
  );
};
