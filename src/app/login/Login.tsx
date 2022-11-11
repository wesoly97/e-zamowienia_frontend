import {
  Container,
  IconWrapper,
  FormWrapper,
  FormContainer,
  Heading,
  StyledLoginIcon,
  StyledWaveIcon,
  FormBox,
  Prompt,
  StyledLink,
} from './Login.styles';
import { LoginFormWrapper } from './loginForm/LoginFormWrapper';

import { AppLinks } from '@/routing/AppRoutes.types';
import { useLocaleContext } from '@/context/locale/hooks/useLocaleContext';

export const Login = () => {
  const { t } = useLocaleContext();

  return (
    <Container>
      <IconWrapper>
        <StyledLoginIcon />
      </IconWrapper>
      <FormWrapper>
        <FormContainer>
          <FormBox>
            <Heading>{t('login.title')}</Heading>
            <LoginFormWrapper />
            <Prompt>
              <span>{t('login.prompt.part1')}</span>
              <StyledLink to={AppLinks.PasswordRecovery}>&nbsp;{t('login.prompt.part2')}</StyledLink>
            </Prompt>
          </FormBox>
        </FormContainer>
      </FormWrapper>
      <StyledWaveIcon />
    </Container>
  );
};
