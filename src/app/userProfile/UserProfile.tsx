import { DetailsColumn, PasswordColumn, Container, Wrapper, Heading, SubHeading } from './UserProfile.styles';
import { UserProfileChangePasswordFormWrapper } from './userProfileChangePasswordForm/UserProfileChangePasswordFormWrapper';
import { UserProfileFormWrapper } from './userProfileForm/UserProfileFormWrapper';

export const UserProfile = () => {
  return (
    <Container>
      <Heading>Edycja danych</Heading>
      <Wrapper>
        <DetailsColumn>
          <SubHeading>Dane użytkownika</SubHeading>
          <UserProfileFormWrapper />
        </DetailsColumn>
        <PasswordColumn>
          <SubHeading>Zmiana hasła</SubHeading>
          <UserProfileChangePasswordFormWrapper />
        </PasswordColumn>
      </Wrapper>
    </Container>
  );
};
