import { useMemo } from 'react';

import { useLogoutEffect } from './hooks/useLogout/useLogoutEffect';
import { NavBase } from './NavBase';
import { NavProps } from './Nav.types';

import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { SecondaryButton } from '@/ui/button/SecondaryButton';
import { isUserVerified } from '@/utils/isUserVerified';

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
        action: () => logout(null),
        label: 'Wyloguj',
        order: 4,
      },
    ];

    if (isUserVerified(session?.accountType)) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <NavBase
      position={position}
      userPanel={userPanel}
      buttons={buttons}
      handleRedirectMainPage={handleRedirectMainPage}
      handleRedirectOrdersPage={handleRedirectOrdersPage}
    />
  );
};
