import { ReactNode } from 'react';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import { AlertColor } from '@mui/material/Alert';

export type ShowToastProps = {
  type?: AlertColor;
  message: ReactNode;
  duration?: number;
  anchorOrigin?: SnackbarOrigin;
};

export type ToastContextValue = {
  showToast: ({ type, message, duration, anchorOrigin }: ShowToastProps) => void;
};
