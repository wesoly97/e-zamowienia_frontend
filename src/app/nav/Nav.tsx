import { ListItemButton } from '@mui/material';
import { useMemo } from 'react';

import { StyledList, StyledListItem, StyledLogo } from './Nav.styles';
import { NavProps } from './Nav.types';

import { Navbar } from '@/ui/navbar/Navbar';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { SecondaryButton } from '@/ui/button/SecondaryButton';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppRoute } from '@/routing/AppRoutes.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { useLogoutEffect } from '@/hooks/useLogout/useLogoutEffect';

export const Nav = ({ position }: NavProps) => {
  const navigate = useNavigate();

  const { isUnauthenticated } = useAuthContext();
  const { mutate: logout } = useLogoutEffect();

  const handleRedirectMainPage = () => {
    navigate(AppRoute.Main);
  };

  const handleRedirectOrdersPage = () => {
    navigate(AppRoute.Orders);
  };

  const buttons = useMemo(() => {
    const handleRedirectLoginPage = () => {
      navigate(AppRoute.Login);
    };

    const handleRedirectRegisterPage = () => {
      navigate(AppRoute.Register);
    };

    if (isUnauthenticated) {
      return (
        <>
          <PrimaryButton handleClick={handleRedirectLoginPage}>Logowanie</PrimaryButton>
          <SecondaryButton handleClick={handleRedirectRegisterPage}>Rejestracja</SecondaryButton>
        </>
      );
    }
  }, [isUnauthenticated, navigate]);

  const userPanel = useMemo(() => {
    return [
      {
        action: () => logout(),
        label: 'Wyloguj',
      },
    ];
  }, [logout]);

  return (
    <>
      <Navbar position={position} buttons={buttons} userPanel={userPanel}>
        <StyledLogo onClick={handleRedirectMainPage} />
        <StyledList>
          <StyledListItem>
            <ListItemButton onClick={handleRedirectOrdersPage}>
              <span>Zamówienia</span>
            </ListItemButton>
          </StyledListItem>
        </StyledList>
      </Navbar>
    </>
  );
};
