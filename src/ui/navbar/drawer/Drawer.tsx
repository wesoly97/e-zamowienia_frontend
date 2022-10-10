import { StyledDrawer, Container, ButtonBox } from './Drawer.styles';
import { DrawerProps } from './Drawer.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';

export const Drawer = ({ onToggle, isOpened, children, buttons, userPanel, isAuthenticated }: DrawerProps) => {
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
          {isAuthenticated &&
            userPanel.map(({ label, action }, index) => {
              return (
                <PrimaryButton key={index} handleClick={action}>
                  {label}
                </PrimaryButton>
              );
            })}
          {buttons}
        </ButtonBox>
      </Container>
    </StyledDrawer>
  );
};
