import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import { List } from '../Navbar.styles';

import { HamburgerProps } from './Hamburger.types';

export const Hamburger = ({ handleMenuToggle }: HamburgerProps) => {
  return (
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
  );
};
