import { useMemo } from 'react';

import { useLogoutEffect } from './hooks/useLogout/useLogoutEffect';
import { NavBase } from './NavBase';
import { NavProps } from './Nav.types';

import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { SecondaryButton } from '@/ui/button/SecondaryButton';
import { isUserRegular, isUserVerified } from '@/utils/accountTypes';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const Nav = ({ position }: NavProps) => {
  const navigate = useNavigate();
  const { t } = useLocaleContext();

  const { isUnauthenticated, session } = useAuthContext();
  const { mutate: logout } = useLogoutEffect();

  const handleRedirectUserProfilePage = () => {
    navigate(AppLinks.UserProfile);
  };

  const handleRedirectAddOrderPage = () => {
    navigate(AppLinks.OrderAdd);
  };

  const handleRedirectUserVerificationPage = () => {
    navigate(AppLinks.UserVerification);
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
          <PrimaryButton handleClick={handleRedirectLoginPage}>{t('title.asd')}</PrimaryButton>
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
        order: 5,
      },
    ];

    if (isUserRegular(session?.accountType)) {
      naviagationItems = [
        ...naviagationItems,
        ...[
          {
            action: () => handleRedirectUserVerificationPage(),
            label: 'Zostań zamawiającym',
            order: 4,
          },
        ],
      ];
    }

    if (isUserVerified(session?.accountType)) {
      naviagationItems = [
        ...naviagationItems,
        ...[
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
        ],
      ];
    }

    return naviagationItems.sort((prev, next) => prev.order - next.order);
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
