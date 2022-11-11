import { DetailsColumn, PasswordColumn, Container, Wrapper, Heading, SubHeading } from './UserProfile.styles';
import { UserProfileChangePasswordFormWrapper } from './userProfileChangePasswordForm/UserProfileChangePasswordFormWrapper';
import { UserProfileFormWrapper } from './userProfileForm/UserProfileFormWrapper';

import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const UserProfile = () => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <Heading>{t('profile.title')}</Heading>
      <Wrapper>
        <DetailsColumn>
          <SubHeading>{t('profile.forms.userDetails.title')}</SubHeading>
          <UserProfileFormWrapper />
        </DetailsColumn>
        <PasswordColumn>
          <SubHeading>{t('profile.forms.changePassword.title')}</SubHeading>
          <UserProfileChangePasswordFormWrapper />
        </PasswordColumn>
      </Wrapper>
    </Container>
  );
};
