import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as LoginIcon } from '@/assets/icons/login/login.svg';
import { ReactComponent as WaveIcon } from '@/assets/icons/login/wave.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const IconWrapper = styled.div`
  display: none;
  flex: 1 0 0%;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
  }
`;

export const StyledLoginIcon = styled(LoginIcon)`
  width: 80%;
  height: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex: 1 0 0%;
  background-color: ${({ theme }) => theme.colors.GREY};
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormBox = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Heading = styled.h1`
  ${({ theme }) => theme.fontType.h3};

  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  text-align: center;
  font-weight: 700;
`;

export const RegisterPrompt = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  text-align: right;
  padding-top: 32px;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    justify-content: right;
  }
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
