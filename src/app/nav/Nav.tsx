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
import { RoleTypes } from '@/api/types/types';

export const Nav = ({ position }: NavProps) => {
  const navigate = useNavigate();

  const { isUnauthenticated, session } = useAuthContext();
  const { mutate: logout } = useLogoutEffect();

  const handleRedirectUserProfilePage = () => {
    navigate(AppLinks.UserProfile);
  };

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
    let naviagationItems = [
      {
        action: () => handleRedirectUserProfilePage(),
        label: 'Profil',
        order: 1,
      },
      {
        action: () => logout(),
        label: 'Wyloguj',
        order: 4,
      },
    ];

    if (session && [RoleTypes.Administrator, RoleTypes.Orderer].includes(session?.accountType)) {
      const verifiedUserNaviagationItems = [
        {
          action: () => handleRedirectOrdersUserListPage(),
          label: 'Moje ogłoszenia',
          order: 2,
        },
        {
          action: () => handleRedirectAddOrderPage(),
          label: 'Dodaj ogłoszenie',
          order: 3,
        },
      ];

      naviagationItems = [...naviagationItems, ...verifiedUserNaviagationItems].sort(
        (prev, next) => prev.order - next.order,
      );
    }

    return naviagationItems;
  }, [session]);

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
