import Snackbar from '@mui/material/Snackbar';
import { SyntheticEvent } from 'react';

import { StyledAlert } from './Toast.styles';
import { ToastProps } from './Toast.types';

export const Toast = ({ isOpen, setIsOpen, type, children, duration, anchorOrigin }: ToastProps) => {
  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={duration || 2000}
      onClose={handleClose}
      anchorOrigin={anchorOrigin || { vertical: 'top', horizontal: 'center' }}
    >
      <StyledAlert onClose={handleClose} variant={'filled'} severity={type || 'success'}>
        {children}
      </StyledAlert>
    </Snackbar>
  );
};
