import { useParams } from 'react-router';
import { useEffect } from 'react';

import { Heading, SentMessage, StyledEmailSentIcon } from './PasswordRecovery.styles';
import { isTokenExpired } from './PasswordRecovery.utils';
import { PasswordRecoveryFormWrapper } from './passwordRecoveryForm/PasswordRecoveryFormWrapper';
import { PasswordRecoveryResetFormWrapper } from './passwordRecoveryResetForm/PasswordRecoveryResetFormWrapper';

import { usePasswordRecoveryContext } from '@/context/passwordRecovery/hooks/usePasswordRecoveryContext';
import { AppLinks } from '@/routing/AppRoutes.types';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const PasswordRecovery = () => {
  const navigate = useNavigate();
  const { tokenExpirationDate } = usePasswordRecoveryContext();
  const { tokenId } = useParams<{ tokenId: string }>();
  const { t } = useLocaleContext();

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
        <Heading>{t('passwordRecovery.status.passwordSubmission')}</Heading>
        <PasswordRecoveryResetFormWrapper token={tokenId} />
      </>
    );
  }

  if (!isTokenExpired(tokenExpirationDate) && !tokenId) {
    return (
      <>
        <StyledEmailSentIcon />
        <SentMessage>{t('passwordRecovery.status.emailSent')}</SentMessage>
      </>
    );
  }

  if (isTokenExpired(tokenExpirationDate) && !tokenId) {
    return (
      <>
        <Heading>{t('passwordRecovery.status.emailSubmission.title')}</Heading>
        <p>{t('passwordRecovery.status.emailSubmission.subtitle')}</p>
        <PasswordRecoveryFormWrapper />
      </>
    );
  }

  return (
    <>
      <Heading>{t('passwordRecovery.status.error.title')}</Heading>
      <p>{t('passwordRecovery.status.error.subtitle')}</p>
    </>
  );
};
