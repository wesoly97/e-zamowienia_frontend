import { AppBarTypeMap } from '@mui/material';
import { ReactNode } from 'react';

export type NavbarProps = { children: ReactNode } & Pick<AppBarTypeMap['props'], 'position' | 'enableColorOnDark'>;
