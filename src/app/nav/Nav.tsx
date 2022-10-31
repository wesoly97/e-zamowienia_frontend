import { ListItemButton } from '@mui/material';
import { useMemo } from 'react';

import { StyledList, StyledListItem, StyledLogo } from './Nav.styles';
import { NavProps } from './Nav.types';
import { useLogoutEffect } from './hooks/useLogout/useLogoutEffect';

import { Navbar } from '@/ui/navbar/Navbar';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { SecondaryButton } from '@/ui/button/SecondaryButton';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';

export const Nav = ({ position }: NavProps) => {
  const navigate = useNavigate();

  const { isUnauthenticated } = useAuthContext();
  const { mutate: logout } = useLogoutEffect();

  const handleRedirectAddOrderPage = () => {
    navigate(AppLinks.OrderAdd);
  };

  const handleRedirectOrdersUserListPage = () => {
    navigate(AppLinks.OrdersUserList);
  };

  const handleRedirectMainPage = () => {
    navigate(AppRoute.Main);
  };

  const handleRedirectOrdersPage = () => {
    navigate(AppLinks.Orders);
  };

  const buttons = useMemo(() => {
    const handleRedirectLoginPage = () => {
      navigate(AppLinks.Login);
    };

    const handleRedirectRegisterPage = () => {
      navigate(AppLinks.Register);
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
        action: () => handleRedirectOrdersUserListPage(),
        label: 'Moje ogłoszenia',
      },
      {
        action: () => handleRedirectAddOrderPage(),
        label: 'Dodaj ogłoszenie',
      },
      {
        action: () => logout(),
        label: 'Wyloguj',
      },
    ];
  }, []);

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
