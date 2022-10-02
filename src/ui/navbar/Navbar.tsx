import { Avatar, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { PrimaryButton } from '../button/PrimaryButton';
import { SecondaryButton } from '../button/SecondaryButton';

import { NavbarProps } from './Navbar.types';
import { ActionBox, Container, List, StyledAppBar, Wrapper } from './Navbar.styles';
import { Drawer } from './drawer/Drawer';

import { theme } from '@/theme/theme';

export const Navbar = ({ children, enableColorOnDark }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const matches = useMediaQuery(theme.breakpoints.up('md'));

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
      <StyledAppBar position={'static'} enableColorOnDark={enableColorOnDark}>
        <Wrapper>
          <Container>
            {matches ? (
              <>
                {children}
                <ActionBox>
                  <PrimaryButton handleClick={() => null}>Logowanie</PrimaryButton>
                  <SecondaryButton handleClick={() => null}>Rejestracja</SecondaryButton>
                </ActionBox>
              </>
            ) : (
              hamburger
            )}
            {/* TODO Logged*/}
            {/* <Tooltip title="Panel użytkownika">
              <IconButton>
                <Avatar></Avatar>
              </IconButton>
            </Tooltip> */}
          </Container>
        </Wrapper>
      </StyledAppBar>
      <Drawer onToggle={handleMenuToggle} isOpened={open}>
        {children}
      </Drawer>
    </>
  );
};
