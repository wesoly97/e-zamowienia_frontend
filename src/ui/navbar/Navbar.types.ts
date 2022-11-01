import { AppBarTypeMap } from '@mui/material/AppBar/AppBar';
import { ReactNode } from 'react';

export type UserPanelProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any;
  label: string;
  order: number;
};

type ChildrenProps = {
  buttons: ReactNode;
  userPanel: UserPanelProps[];
};

export type NavbarProps = AppBarTypeMap['props'] & ChildrenProps;
