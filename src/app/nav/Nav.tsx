import { useMemo } from 'react';

import { useLogoutEffect } from './hooks/useLogout/useLogoutEffect';
import { NavBase } from './NavBase';
import { NavProps } from './Nav.types';
import { LanguageButton, Languages } from './Nav.styles';

import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { AppLinks, AppRoute } from '@/routing/AppRoutes.types';
import { PrimaryButton } from '@/ui/button/PrimaryButton';
import { SecondaryButton } from '@/ui/button/SecondaryButton';
import { isUserRegular, isUserVerified } from '@/utils/accountTypes';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';
import { AppLocale } from '@/i18n/i18n.types';

export const Nav = ({ position }: NavProps) => {
  const navigate = useNavigate();

  const { isUnauthenticated, session } = useAuthContext();
  const { mutate: logout } = useLogoutEffect();
  const { t, changeLocale } = useLocaleContext();

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
          <PrimaryButton handleClick={handleRedirectLoginPage}>{t('navbar.buttons.login')}</PrimaryButton>
          <SecondaryButton handleClick={handleRedirectRegisterPage}>{t('navbar.buttons.register')}</SecondaryButton>
        </>
      );
    }
  }, [isUnauthenticated, navigate, t]);

  const languages = useMemo(() => {
    return (
      <Languages>
        <LanguageButton onClick={() => changeLocale(AppLocale.Pl)}>PL</LanguageButton>
        <span>|</span>
        <LanguageButton onClick={() => changeLocale(AppLocale.En)}>EN</LanguageButton>
      </Languages>
    );
  }, []);

  const userPanel = useMemo(() => {
    let naviagationItems = [
      {
        action: handleRedirectUserProfilePage,
        label: t('navbar.buttons.userMenu.profile'),
        order: 1,
      },
      {
        action: () => logout(null),
        label: t('navbar.buttons.userMenu.logout'),
        order: 5,
      },
    ];

    if (isUserRegular(session?.accountType)) {
      naviagationItems = [
        ...naviagationItems,
        ...[
          {
            action: handleRedirectUserVerificationPage,
            label: t('navbar.buttons.userMenu.verification'),
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
            action: handleRedirectOrdersUserListPage,
            label: t('navbar.buttons.userMenu.myOrders'),
            order: 2,
          },
          {
            action: handleRedirectAddOrderPage,
            label: t('navbar.buttons.userMenu.addOrder'),
            order: 3,
          },
        ],
      ];
    }

    return naviagationItems.sort((prev, next) => prev.order - next.order);
  }, [session]);

  return (
    <NavBase
      position={position}
      userPanel={userPanel}
      buttons={buttons}
      languages={languages}
      handleRedirectMainPage={handleRedirectMainPage}
      handleRedirectOrdersPage={handleRedirectOrdersPage}
    />
  );
};
