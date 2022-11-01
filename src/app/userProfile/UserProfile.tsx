import { DetailsColumn, PasswordColumn, Container, Wrapper } from './UserProfile.styles';
import { UserProfileChangePasswordFormWrapper } from './userProfileChangePasswordForm/UserProfileChangePasswordFormWrapper';
import { UserProfileFormWrapper } from './userProfileForm/UserProfileFormWrapper';

export const UserProfile = () => {
  return (
    <Container>
      <h1>Edycja danych</h1>
      <Wrapper>
        <DetailsColumn>
          <h2>Dane użytkownika</h2>
          <UserProfileFormWrapper />
        </DetailsColumn>
        <PasswordColumn>
          <h2>Zmiana hasła</h2>
          <UserProfileChangePasswordFormWrapper />
        </PasswordColumn>
      </Wrapper>
    </Container>
  );
};
