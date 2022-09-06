import { Meta, Story } from '@storybook/react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import styled from 'styled-components';

import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import { Navbar } from '@/ui/navbar/Navbar';
import { NavbarProps } from '@/ui/navbar/Navbar.types';

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta;

const StyledLogo = styled(Logo)`
  width: 190px;
  height: 30px;
`;

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;

const StyledListItem = styled(ListItem)`
  padding: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 8px 16px;
  }
`;

const navItems = ['Home', 'About', 'Contact'];

const Template: Story<NavbarProps> = ({ children, ...props }: NavbarProps) => <Navbar {...props}>{children}</Navbar>;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <StyledLogo />
      <StyledList>
        {navItems.map((item) => (
          <StyledListItem key={item}>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  ),
};
