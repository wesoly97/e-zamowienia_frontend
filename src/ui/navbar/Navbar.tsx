import { Avatar, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../button/PrimaryButton';
import { SecondaryButton } from '../button/SecondaryButton';

import { NavbarProps } from './Navbar.types';
import { ActionBox, Container, List, StyledAppBar, StyledLogo, Wrapper } from './Navbar.styles';
import { Drawer } from './drawer/Drawer';

import { theme } from '@/theme/theme';
import { AppRoute } from '@/routing/AppRoutes.types';

export const Navbar = ({ children, enableColorOnDark, position }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleLoginPage = () => {
    navigate(AppRoute.Login);
  };

  const handleRegisterPage = () => {
    navigate(AppRoute.Register);
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
      <StyledAppBar position={position} enableColorOnDark={enableColorOnDark}>
        <Wrapper>
          <Container>
            {matches ? (
              <>
                <StyledLogo />
                {children}
                <ActionBox>
                  <PrimaryButton handleClick={handleLoginPage}>Logowanie</PrimaryButton>
                  <SecondaryButton handleClick={handleRegisterPage}>Rejestracja</SecondaryButton>
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
