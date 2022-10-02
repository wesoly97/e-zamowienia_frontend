import { StyledDrawer, Container, StyledLogo, ButtonBox } from './Drawer.styles';
import { DrawerProps } from './Drawer.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { SecondaryButton } from '@/ui/button/SecondaryButton';

export const Drawer = ({ onToggle, isOpened, children }: DrawerProps) => {
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
        <div>
          <StyledLogo />
          {children}
        </div>
        <ButtonBox>
          <PrimaryButton handleClick={() => null}>Logowanie</PrimaryButton>
          <SecondaryButton handleClick={() => null}>Rejestracja</SecondaryButton>
        </ButtonBox>
      </Container>
    </StyledDrawer>
  );
};
