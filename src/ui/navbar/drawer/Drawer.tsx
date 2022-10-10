import { StyledDrawer, Container, ButtonBox } from './Drawer.styles';
import { DrawerProps } from './Drawer.types';

export const Drawer = ({ onToggle, isOpened, children, buttons }: DrawerProps) => {
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
        <ButtonBox>{buttons}</ButtonBox>
      </Container>
    </StyledDrawer>
  );
};
