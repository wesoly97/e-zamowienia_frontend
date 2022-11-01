import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState, MouseEvent, useMemo } from 'react';

import { UserMenuProps } from './UserMenu.types';

export const UserMenu = ({ userPanel }: UserMenuProps) => {
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
        <MenuItem key={index} onClick={action}>
          {label}
        </MenuItem>
      );
    });
  }, [userPanel]);

  return (
    <div>
      <Tooltip title="Menu użytkownika">
        <IconButton onClick={handleOpenMenu}>
          <Avatar alt="avatar" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
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
      </Menu>
    </div>
  );
};
