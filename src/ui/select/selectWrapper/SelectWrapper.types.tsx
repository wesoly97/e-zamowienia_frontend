import { SelectProps as MuiSelectProps } from '@mui/material';
import { ReactNode } from 'react';

export type SelectWrapperProps = { children?: ReactNode; errorText?: string } & MuiSelectProps;
