import { AppBarTypeMap } from '@mui/material/AppBar/AppBar';
import { ReactNode } from 'react';

export type UserPanelProps = {
  action: VoidFunction;
  label: string;
  order: number;
};

type ChildrenProps = {
  buttons: ReactNode;
  languages: ReactNode;
  userPanel: UserPanelProps[];
};

export type NavbarProps = AppBarTypeMap['props'] & ChildrenProps;
