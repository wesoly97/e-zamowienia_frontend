import MenuIcon from '@mui/icons-material/Menu';

import { List } from '../Navbar.styles';

import { StyledIconButton } from './Hamburger.styles';
import { HamburgerProps } from './Hamburger.types';

export const Hamburger = ({ handleMenuToggle }: HamburgerProps) => {
  return (
    <List>
      <StyledIconButton
        size={'large'}
        aria-label={'dropdown menu'}
        aria-controls={'mobile-menu'}
        aria-haspopup={'menu'}
        onClick={handleMenuToggle}
      >
        <MenuIcon />
      </StyledIconButton>
    </List>
  );
};
