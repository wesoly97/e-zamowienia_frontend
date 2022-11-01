import { useParams } from 'react-router';

import { SentMessage, StyledEmailSentIcon } from './PasswordRecovery.styles';
import { PasswordRecoveryFormWrapper } from './passwordRecoveryForm/PasswordRecoveryFormWrapper';
import { PasswordRecoveryResetFormWrapper } from './passwordRecoveryResetForm/PasswordRecoveryResetFormWrapper';

import { usePasswordRecoveryContext } from '@/context/passwordRecovery/hooks/usePasswordRecoveryContext';

export const PasswordRecovery = () => {
  const { isTokenExpired } = usePasswordRecoveryContext();
  const { tokenId } = useParams<{ tokenId: string }>();

  if (!isTokenExpired && tokenId) {
    return (
      <>
        <h1>Resetowanie hasła</h1>
        <PasswordRecoveryResetFormWrapper token={tokenId} />
      </>
    );
  }

  if (!isTokenExpired && !tokenId) {
    return (
      <>
        <StyledEmailSentIcon />
        <SentMessage>
          Link został wysłany na podany email. Jeśli nie pojawi się on w ciągu kilku minut, sprawdź folder spamu.
        </SentMessage>
      </>
    );
  }

  if (isTokenExpired && !tokenId) {
    return (
      <>
        <h1>Zresetuj hasło</h1>
        <p>Wpisz adres email swojego konta, a my wyślemy Ci link do resetowania hasła.</p>
        <PasswordRecoveryFormWrapper />
      </>
    );
  }

  return null;
};
