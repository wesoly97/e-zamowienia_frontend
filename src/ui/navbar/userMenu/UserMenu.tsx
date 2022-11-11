import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState, MouseEvent, useMemo } from 'react';

import { UserMenuProps } from './UserMenu.types';
import { StyledAvatar, StyledMenu } from './UserMenu.styles';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const UserMenu = ({ userPanel }: UserMenuProps) => {
  const { t } = useLocaleContext();

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElement(null);
  };

  const userMenuActions = useMemo(() => {
    return userPanel.map(({ label, action }, index) => {
      return (
        <MenuItem key={index} role={'tabpanel'} onClick={action}>
          {label}
        </MenuItem>
      );
    });
  }, [userPanel]);

  return (
    <div>
      <Tooltip title={t('navbar.userMenu.tooltip')}>
        <IconButton
          aria-label={'dropdown user menu'}
          aria-controls={'user-menu'}
          aria-haspopup={'menu'}
          onClick={handleOpenMenu}
        >
          <StyledAvatar alt={'avatar'} />
        </IconButton>
      </Tooltip>
      <StyledMenu
        id={'user-menu'}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={!!anchorElement}
        onClose={handleCloseMenu}
      >
        {userMenuActions}
      </StyledMenu>
    </div>
  );
};
