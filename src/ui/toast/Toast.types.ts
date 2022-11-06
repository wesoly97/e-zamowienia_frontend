import { AlertColor } from '@mui/material/Alert';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type ToastProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  type?: AlertColor;
  children: ReactNode;
  duration?: number;
  anchorOrigin?: SnackbarOrigin;
};
