import { ButtonTypeMap } from '@mui/material';
import { ReactNode } from 'react';

export type ButtonProps = {
  handleClick?: VoidFunction;
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
} & ButtonTypeMap['props'];
