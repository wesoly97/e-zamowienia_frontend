import { ListItemButton } from '@mui/material';

import { StyledList, StyledListItem } from './Nav.styles';

import { Navbar } from '@/ui/navbar/Navbar';

export const Nav = () => {
  return (
    <>
      <Navbar>
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
