import { ButtonTypeMap } from '@mui/material';
import { ReactNode } from 'react';

type ActionProps = {
  handleClick?: () => void;
};

export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
} & Pick<ButtonTypeMap['props'], 'disabled' | 'endIcon' | 'startIcon'> &
  ActionProps;
