import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';

import { SentMessage, StyledEmailSentIcon } from './PasswordRecovery.styles';
import { isTokenExpired } from './PasswordRecovery.utils';
import { PasswordRecoveryFormWrapper } from './passwordRecoveryForm/PasswordRecoveryFormWrapper';
import { PasswordRecoveryResetFormWrapper } from './passwordRecoveryResetForm/PasswordRecoveryResetFormWrapper';

import { usePasswordRecoveryContext } from '@/context/passwordRecovery/hooks/usePasswordRecoveryContext';
import { AppLinks } from '@/routing/AppRoutes.types';

export const PasswordRecovery = () => {
  const { tokenExpirationDate } = usePasswordRecoveryContext();
  const { tokenId } = useParams<{ tokenId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenExpired(tokenExpirationDate) && tokenId) {
      const timer = setTimeout(() => {
        navigate(AppLinks.PasswordRecovery);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [navigate, tokenExpirationDate, tokenId]);

  if (!isTokenExpired(tokenExpirationDate) && tokenId) {
    return (
      <>
        <h1>Resetowanie hasła</h1>
        <PasswordRecoveryResetFormWrapper token={tokenId} />
      </>
    );
  }

  if (!isTokenExpired(tokenExpirationDate) && !tokenId) {
    return (
      <>
        <StyledEmailSentIcon />
        <SentMessage>
          Link został wysłany na podany email. Jeśli nie pojawi się on w ciągu kilku minut, sprawdź folder spamu.
        </SentMessage>
      </>
    );
  }

  if (isTokenExpired(tokenExpirationDate) && !tokenId) {
    return (
      <>
        <h1>Zresetuj hasło</h1>
        <p>Wpisz adres email swojego konta, a my wyślemy Ci link do resetowania hasła.</p>
        <PasswordRecoveryFormWrapper />
      </>
    );
  }

  if (isTokenExpired(tokenExpirationDate) && tokenId) {
    return (
      <>
        <h1>Niepoprawny link</h1>
        <p>
          Token wygasł lub coś poszło nie tak. Za chwilę nastąpi przekierowanie na początek procesu resetowania hasła.
        </p>
      </>
    );
  }
};
