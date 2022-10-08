import { StyledDrawer, Container, StyledLogo, ButtonBox } from './Drawer.styles';
import { DrawerProps } from './Drawer.types';

import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { SecondaryButton } from '@/ui/button/SecondaryButton';
import { AppRoute } from '@/routing/AppRoutes.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';

export const Drawer = ({ onToggle, isOpened, children }: DrawerProps) => {
  const navigate = useNavigate();

  const handleRedirectMainPage = () => {
    navigate(AppRoute.Main);
  };

  const handleRedirectLoginPage = () => {
    navigate(AppRoute.Login);
  };

  const handleRedirectRegisterPage = () => {
    navigate(AppRoute.Register);
  };

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
          <StyledLogo onClick={handleRedirectMainPage} />
          {children}
        </div>
        <ButtonBox>
          <PrimaryButton handleClick={handleRedirectLoginPage}>Logowanie</PrimaryButton>
          <SecondaryButton handleClick={handleRedirectRegisterPage}>Rejestracja</SecondaryButton>
        </ButtonBox>
      </Container>
    </StyledDrawer>
  );
};
