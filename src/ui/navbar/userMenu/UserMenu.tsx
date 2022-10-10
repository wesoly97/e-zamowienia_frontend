import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState, MouseEvent } from 'react';

import { UserMenuProps } from './UserMenu.types';

export const UserMenu = ({ userPanel }: UserMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Menu użytkownika">
        <IconButton onClick={handleMenu}>
          <Avatar alt="avatar" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={!!anchorEl}
        onClose={handleClose}
      >
        {userPanel.map(({ label, action }, index) => {
          return (
            <MenuItem key={index} onClick={action}>
              {label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
