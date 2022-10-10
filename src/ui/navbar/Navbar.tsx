import { IconButton, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { NavbarProps } from './Navbar.types';
import { ActionBox, Container, List, StyledAppBar, Wrapper } from './Navbar.styles';
import { Drawer } from './drawer/Drawer';
import { UserMenu } from './userMenu/UserMenu';

import { theme } from '@/theme/theme';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';

export const Navbar = ({ children, buttons, enableColorOnDark, position, userPanel }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const { isAuthenticated } = useAuthContext();

  const handleMenuToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const hamburger = useMemo(
    () => (
      <List>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>
      </List>
    ),
    [],
  );

  return (
    <>
      <StyledAppBar position={position} enableColorOnDark={enableColorOnDark}>
        <Wrapper>
          <Container>
            {isDesktop ? (
              <>
                {children}
                <ActionBox>{buttons}</ActionBox>
              </>
            ) : (
              hamburger
            )}
            {isAuthenticated && isDesktop && <UserMenu userPanel={userPanel} />}
          </Container>
        </Wrapper>
      </StyledAppBar>
      <Drawer
        onToggle={handleMenuToggle}
        isOpened={open}
        buttons={buttons}
        userPanel={userPanel}
        isAuthenticated={isAuthenticated}
      >
        {children}
      </Drawer>
    </>
  );
};
