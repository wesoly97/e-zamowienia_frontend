import { ReactNode } from 'react';

import { UserPanelProps } from '../Navbar.types';

export type DrawerProps = {
  onToggle: VoidFunction;
  isOpened: boolean;
  children: ReactNode;
  buttons: ReactNode;
  userPanel: UserPanelProps[];
  isAuthenticated: boolean;
};
