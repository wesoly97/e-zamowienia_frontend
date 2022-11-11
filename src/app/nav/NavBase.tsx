import { ListItemButton } from '@mui/material';

import { StyledList, StyledListItem, StyledLogo } from './Nav.styles';
import { NavBaseProps } from './Nav.types';

import { Navbar } from '@/ui/navbar/Navbar';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const NavBase = ({
  position,
  buttons,
  userPanel,
  handleRedirectMainPage,
  handleRedirectOrdersPage,
}: NavBaseProps) => {
  const { t } = useLocaleContext();

  return (
    <Navbar position={position} buttons={buttons} userPanel={userPanel}>
      <StyledLogo onClick={handleRedirectMainPage} />
      <StyledList>
        <StyledListItem>
          <ListItemButton onClick={handleRedirectOrdersPage}>
            <span>{t('navbar.buttons.orders')}</span>
          </ListItemButton>
        </StyledListItem>
      </StyledList>
    </Navbar>
  );
};
