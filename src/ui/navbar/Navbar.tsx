import { AppBar, Avatar, Box, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { NavbarProps } from './Navbar.types';
import { Container, List, StyledDrawer, Utils, Wrapper } from './Navbar.styles';

import { theme } from '@/theme/theme';

export const Navbar = ({ children, position, enableColorOnDark }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <AppBar position={position} enableColorOnDark={enableColorOnDark}>
        <Wrapper>
          <Container>
            {!matches && (
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
            )}
            {matches && children}
            <Utils>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Utils>
          </Container>
        </Wrapper>
      </AppBar>
      <div>
        <StyledDrawer
          open={open}
          anchor={'left'}
          onClose={handleMenuToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div>{children}</div>
        </StyledDrawer>
      </div>
    </>
  );
};
