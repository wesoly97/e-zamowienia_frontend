import styled from 'styled-components';

import BackgroundPicture from '@/assets/icons/passwordRecovery/background.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: url(${BackgroundPicture}) center/cover no-repeat ${({ theme }) => theme.colors.GREY};
`;

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.WHITE};
  padding: 40px 48px;
  width: auto;
  max-width: 500px;
`;
