import { useMemo } from 'react';

import { StyledDrawer, Container, ButtonBox, StyledPrimaryButton } from './Drawer.styles';
import { DrawerProps } from './Drawer.types';

export const Drawer = ({ onToggle, isOpened, children, buttons, userPanel, isAuthenticated }: DrawerProps) => {
  const userMenuActions = useMemo(() => {
    if (isAuthenticated) {
      return userPanel.map(({ label, action }, index) => {
        return (
          <StyledPrimaryButton key={index} handleClick={action}>
            {label}
          </StyledPrimaryButton>
        );
      });
    }
  }, [isAuthenticated, userPanel]);

  return (
    <StyledDrawer
      open={isOpened}
      anchor={'left'}
      onClose={onToggle}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Container>
        <div>{children}</div>
        <ButtonBox>
          {userMenuActions}
          {buttons}
        </ButtonBox>
      </Container>
    </StyledDrawer>
  );
};
