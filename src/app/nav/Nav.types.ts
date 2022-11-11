import { AppBarTypeMap } from '@mui/material/AppBar/AppBar';
import { ReactNode } from 'react';

import { UserPanelProps } from '@/ui/navbar/Navbar.types';

export type NavProps = Pick<AppBarTypeMap['props'], 'position'>;

export type NavBaseProps = NavProps & {
  buttons?: ReactNode;
  languages: ReactNode;
  userPanel: UserPanelProps[];
  handleRedirectMainPage: VoidFunction;
  handleRedirectOrdersPage: VoidFunction;
};
