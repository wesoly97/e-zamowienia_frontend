import styled from 'styled-components';

import { ReactComponent as LoginIcon } from '@/assets/icons/login/login.svg';
import { ReactComponent as WaveIcon } from '@/assets/icons/login/wave.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Icon = styled.div`
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

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  text-align: center;

  ${({ theme }) => theme.fontType.h4};
`;

export const StyledWaveIcon = styled(WaveIcon)`
  position: absolute;
  bottom: 0;
  left: 0;
`;
