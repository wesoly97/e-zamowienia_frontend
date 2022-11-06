import { ReactNode, useCallback, useMemo, useState } from 'react';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import { AlertColor } from '@mui/material/Alert';

import { ToastContext } from '../toastContext/ToastContext';
import { ShowToastProps, ToastContextValue } from '../toastContext/ToastContext.types';

import { ToastContextControllerProps } from './ToastContextController.types';

import { Toast } from '@/ui/toast/Toast';

export const ToastContextController = ({ children }: ToastContextControllerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<AlertColor | undefined>(undefined);
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [anchorOrigin, setAnchorOrigin] = useState<SnackbarOrigin | undefined>(undefined);
  const [message, setMessage] = useState<ReactNode>('');

  const showToast = useCallback(({ message, type, duration, anchorOrigin }: ShowToastProps) => {
    setIsOpen(true);
    setType(type);
    setDuration(duration);
    setMessage(message);
    setAnchorOrigin(anchorOrigin);
  }, []);

  const value = useMemo<ToastContextValue>(
    () => ({
      showToast,
    }),
    [showToast],
  );

  return (
    <ToastContext.Provider value={value}>
      <Toast isOpen={isOpen} setIsOpen={setIsOpen} type={type} duration={duration} anchorOrigin={anchorOrigin}>
        {message}
      </Toast>
      {children}
    </ToastContext.Provider>
  );
};
