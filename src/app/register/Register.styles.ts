import styled from 'styled-components';

import { ReactComponent as RegisterIcon } from '@/assets/icons/register/register.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRegisterIcon = styled(RegisterIcon)`
  width: 664px;
  height: 400px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.GREY};
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  text-align: center;

  ${({ theme }) => theme.fontType.h4};
`;

export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  text-align: center;

  ${({ theme }) => theme.fontType.h4};
`;
