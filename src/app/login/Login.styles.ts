import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as LoginIcon } from '@/assets/icons/login/login.svg';
import { ReactComponent as WaveIcon } from '@/assets/icons/login/wave.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLoginIcon = styled(LoginIcon)`
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

export const FormBox = styled.div`
  padding: 0 200px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  text-align: center;

  ${({ theme }) => theme.fontType.h4};
`;

export const RegisterPrompt = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE[125]};
  }
`;

export const StyledWaveIcon = styled(WaveIcon)`
  position: absolute;
  bottom: 0;
  left: 0;
`;
