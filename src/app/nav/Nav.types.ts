import { AppBarTypeMap } from '@mui/material/AppBar/AppBar';

import { UserPanelProps } from '@/ui/navbar/Navbar.types';

export type NavProps = Pick<AppBarTypeMap['props'], 'position'>;

export type NavBaseProps = NavProps & {
  buttons?: JSX.Element;
  userPanel: UserPanelProps[];
  handleRedirectMainPage: VoidFunction;
  handleRedirectOrdersPage: VoidFunction;
};
