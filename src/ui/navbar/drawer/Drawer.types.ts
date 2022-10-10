import { ReactNode } from 'react';

export type DrawerProps = {
  onToggle: VoidFunction;
  isOpened: boolean;
  children: ReactNode;
  buttons: ReactNode;
};
